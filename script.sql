SET @json_data = '[
    {
        "table_name": "users",
        "columns": [
            {"name": "id", "type": "INT", "primary_key": true},
            {"name": "name", "type": "VARCHAR(255)"},
            {"name": "age", "type": "INT"}
        ],
        "data": [
            {"id": 1, "name": "Alice", "age": 30},
            {"id": 2, "name": "Bob", "age": 40}
        ]
    }
]';

-- Parse the JSON object
SET @tables = JSON_EXTRACT(@json_data, '$');

-- Create the database
CREATE DATABASE my_database;

-- Select the newly created database
USE my_database;

-- Create the tables and insert the data
SET @num_tables = JSON_LENGTH(@tables);
SET @i = 0;
WHILE @i < @num_tables DO
    SET @table = JSON_EXTRACT(@tables, CONCAT('$[', @i, ']'));
    SET @table_name = JSON_EXTRACT(@table, '$.table_name');
    SET @columns = JSON_EXTRACT(@table, '$.columns');
    SET @num_columns = JSON_LENGTH(@columns);
    SET @j = 0;
    SET @columns_str = '';
    WHILE @j < @num_columns DO
        SET @column = JSON_EXTRACT(@columns, CONCAT('$[', @j, ']'));
        SET @column_name = JSON_EXTRACT(@column, '$.name');
        SET @column_type = JSON_EXTRACT(@column, '$.type');
        SET @is_primary_key = JSON_EXTRACT(@column, '$.primary_key');
        SET @column_str = CONCAT(@column_name, ' ', @column_type);
        IF @is_primary_key = 'true' THEN
            SET @column_str = CONCAT(@column_str, ' PRIMARY KEY');
        END IF;
        SET @columns_str = CONCAT(@columns_str, @column_str, ', ');
        SET @j = @j + 1;
    END WHILE;
    SET @columns_str = SUBSTRING(@columns_str, 1, LENGTH(@columns_str) - 2);
    SET @create_table_query = CONCAT('CREATE TABLE ', @table_name, ' (', @columns_str, ')');
    PREPARE create_table_stmt FROM @create_table_query;
    EXECUTE create_table_stmt;
    SET @data = JSON_EXTRACT(@table, '$.data');
    SET @num_rows = JSON_LENGTH(@data);
    SET @k = 0;
    WHILE @k < @num_rows DO
        SET @row = JSON_EXTRACT(@data, CONCAT('$[', @k, ']'));
        SET @values = '';
        SET @l = 0;
        WHILE @l < @num_columns DO
            SET @column_name = JSON_EXTRACT(@columns, CONCAT('$[', @l, '].name'));
            SET @column_value = JSON_EXTRACT(@row, CONCAT('$.', @column_name));
            SET @values = CONCAT(@values, QUOTE(@column_value), ', ');
            SET @l = @l + 1;
        END WHILE;
        SET @values = SUBSTRING(@values, 1, LENGTH(@values) - 2);
        SET @insert_query = CONCAT('INSERT INTO ', @table_name, ' VALUES (', @values, ')');
        PREPARE insert_stmt FROM @insert_query;
        EXECUTE insert_stmt;
                SET @k = @k + 1;
    END WHILE;
    SET @i = @i + 1;
END WHILE;