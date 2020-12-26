import React from 'react'

const ContactCard = (props)=> {
	return (
		<div className='contact-card'>
			<h1>{props.contact.name}</h1>
			<h2>{props.contact.email}</h2>
			<h2>{props.contact.phone}</h2>
		</div>
	)
}

export default ContactCard
