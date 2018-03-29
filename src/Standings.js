import React, {Component} from 'react';
import './Standings.css';

export class Standings extends Component {
	handleClickA() {

	}
	render () {
		return ( 
			<tbody>
			{this.props.data.map(person => <tr className="colorful">
				<td>{person.username}</td><td>{person.recent}</td><td className="spacing">{person.alltime}</td>
				</tr>)}
			</tbody>
			)
	}
}