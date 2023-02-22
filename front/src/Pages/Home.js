import React from 'react';
import { Box, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { withRouter } from 'react-router';

import sexes from '../utils/sexes';
import ages from '../utils/ages';
import cities from '../utils/cities';


import rest from '../API/rest';

const columns = [
	{ field: 'id', headerName: 'ID', width: 90 },
	{
		field: 'city',
		headerName: 'Ville',
		width: 150,
		editable: true,
	},
	{
		field: 'sexe',
		headerName: 'Sexe',
		width: 150,
		editable: true,
	},
	{
		field: 'age',
		headerName: 'Age',
		type: 'number',
		width: 150,
		editable: true,
	},
	{
		field: 'value',
		headerName: 'Valeur',
		type: 'number',
		width: 150,
		editable: true,
	}
];

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            name: 'Home',
            filters: [],
			repartitions: [],
			city: '',
			age: '',
			sexe: '',
		};
    }

    componentDidMount () {
        this.getRepartitionByFilters();
	}

	componentDidUpdate (prevProps, prevState) {
		if (prevState.filters.length !== this.state.filters.length)
			this.getRepartitionByFilters();
	}

	cityChange = (event) => {
		this.setState({ filters: [...this.state.filters, 'city'],  city: event.target.value });
	};

	ageChange = (event) => {
		this.setState({ filters: [...this.state.filters, 'age'], age: event.target.value });
	};

	sexeChange = (event) => {
		this.setState({ filters: [...this.state.filters, 'sexe'], sexe: event.target.value });
	};

	getRepartitionByFilters = () => {
		this.setState({ filters: this.state.filters.filter((x, i, a) => a.indexOf(x) === i) }, () => {
			if (this.state.filters.length === 0) {
				this.getAllRepartition();
			} else if (this.state.filters.length === 1) {
				if (this.state.filters[0] === 'city') {
					this.getRepartitionByCity(this.state.city);
				} else if (this.state.filters[0] === 'age') {
					this.getRepartitionByAge(this.state.age);
				} else if (this.state.filters[0] === 'sexe') {
					this.getRepartitionBySexe(this.state.sexe);
				}
			} else if (this.state.filters.length === 2) {
				if (this.state.filters.includes('city') && this.state.filters[1].includes('age')) {
					this.getRepartitionByCityAndAge(this.state.city, this.state.age);
				} else if (this.state.filters[0].includes('city') && this.state.filters[1].includes('sexe')) {
					this.getRepartitionByCityAndSexe(this.state.city, this.state.sexe);
				} else if (this.state.filters[0].includes('age') && this.state.filters[1].includes('sexe')) {
					this.getRepartitionByAgeAndSexe(this.state.age, this.state.sexe);
				}
			} else if (this.state.filters.length === 3) {
				this.getRepartitionByCityAndAgeAndSexe(this.state.city, this.state.age, this.state.sexe);
			}
		});
	};

    getAllRepartition = async () => {
        let response = await rest.getAllRepartition();
		let data = await response.json();
        this.setState({ repartitions: data });
    }

    getRepartitionByCity = async (city) => {
        let response = await rest.getRepartitionByCity(city);
        let data = await response.json();
        this.setState({ repartitions: data });
    }

    getRepartitionByAge = async (age) => {
        let response = await rest.getRepartitionByAge(age);
        let data = await response.json();
        this.setState({ repartitions: data });
    }

    getRepartitionBySexe = async (sexe) => {
        let response = await rest.getRepartitionBySexe(sexe);
        let data = await response.json();
        this.setState({ repartitions: data });
    }

    getRepartitionByCityAndAge = async (city, age) => {
        let response = await rest.getRepartitionByCityAndAge(city, age);
        let data = await response.json();
        this.setState({ repartitions: data });
    }

    getRepartitionByCityAndSexe = async (city, sexe) => {
        let response = await rest.getRepartitionByCityAndSexe(city, sexe);
        let data = await response.json();
        this.setState({ repartitions: data });
    }

    getRepartitionByAgeAndSexe = async (age, sexe) => {
        let response = await rest.getRepartitionByAgeAndSexe(age, sexe);
        let data = await response.json();
        this.setState({ repartitions: data });
    }

    getRepartitionByCityAndAgeAndSexe = async (city, age, sexe) => {
        let response = await rest.getRepartitionByCityAndAgeAndSexe(city, age, sexe);
        let data = await response.json();
        this.setState({ repartitions: data });
    }

	render() {
		return (
			<div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
				<img src={require('../Images/logo.png')} alt='logo' style={{ position: 'relative', bottom: '5px' }} />
				<div style={{ width: '60%', marginBottom: 15, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
					<FormControl fullWidth>
						<InputLabel>Ville</InputLabel>
						<Select labelId='demo-simple-select-label' id='demo-simple-select' value={this.state.city} label='Ville' onChange={this.cityChange}>
							{cities.map((city, key) => (
								<MenuItem key={key} value={city}>
									{city}
								</MenuItem>
							))}
						</Select>
					</FormControl>
					<FormControl fullWidth>
						<InputLabel>Age</InputLabel>
						<Select labelId='demo-simple-select-label' id='demo-simple-select' value={this.state.age} label='Age' onChange={this.ageChange}>
							{ages.map((age, key) => (
								<MenuItem key={key} value={age.label}>
									{age.label}
								</MenuItem>
							))}
						</Select>
					</FormControl>
					<FormControl fullWidth>
						<InputLabel>Sexe</InputLabel>
						<Select labelId='demo-simple-select-label' id='demo-simple-select' value={this.state.sexe} label='Sexe' onChange={this.sexeChange}>
							{sexes.map((sexe, key) => (
								<MenuItem key={key} value={sexe.label}>
									{sexe.label}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</div>
				<Box sx={{ height: 700, width: '60%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
					<DataGrid
						rows={this.state.repartitions}
						columns={columns}
						pageSize={25}
						rowsPerPageOptions={[5]}
						checkboxSelection
						disableSelectionOnClick
						experimentalFeatures={{ newEditingApi: true }}
					/>
				</Box>
			</div>
		);
	}
}

export default Home;
