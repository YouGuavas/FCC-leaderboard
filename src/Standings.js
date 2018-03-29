import React, {Component} from 'react';
import './Standings.css';

export class Standings extends Component {
	handleClickA() {

	}
	render () {
		return ( 
			<tbody>
			{this.props.data.map(person => <tr className="colorful">
				<td className="th2">{this.props.data.indexOf(person) + 1}</td><td className="leftCol"><a href={"http://www.freecodecamp.org/"+person.username}><img src={person.img}/></a><a href={"http://www.freecodecamp.org/"+person.username}>{person.username}</a></td><td>{person.recent}</td><td className="spacing">{person.alltime}</td>
				</tr>)}
			</tbody>
			)
	}
}