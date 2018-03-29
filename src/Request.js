import React, { Component } from 'react';
import { Standings } from './Standings';
import axios from 'axios';
import './Request.css';

const url = 'https://fcctop100.herokuapp.com/api/fccusers/top/';
export class Request extends Component {
	handleMod(th, ti) {
		this.serverRequest = axios.get(url+ti)
					.then(res => {
						let datu = res.data
							th.setState({
								data: datu
						})
				})
	}
	handleAll(e) {
		if (e.target.id == 'selected') return
		else {
			let _this = this;
			if (e.target.innerHTML.indexOf('Recent') !== -1) {
					document.getElementById('selected').removeAttribute('id');
					this.handleMod(_this, 'recent');
					e.target.setAttribute('id', 'selected')
				} else {
					document.getElementById('selected').removeAttribute('id');
					this.handleMod(_this, 'alltime');
					e.target.setAttribute('id', 'selected')
				}
		}
	}
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			select: ''
		}
		this.handleAll = this.handleAll.bind(this);
		this.handleMod = this.handleMod.bind(this);
	}
	componentWillMount() {
		var _this = this;
		this.serverRequest = axios.get(url+'recent')
			.then(res => {
				const datu = res.data
					_this.setState({
						data: datu
					})
			})
	}
	render() {
		return (
			<table>
				<tr>
					<th>Username</th>
					<th onClick={this.handleAll} id='selected'>Recent<span></span></th>
					<th onClick={this.handleAll}>All-Time<span></span></th>
				</tr>
				<Standings data={this.state.data} />
			</table>
		)
	}
}