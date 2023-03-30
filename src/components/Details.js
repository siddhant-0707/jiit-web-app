function Details({ details }) {
    return (
        <div>
            {details && <p>Roll No: {details.enrollmentno}</p>}
            {details && <p>Name: {details.name}</p>}
        </div>
    )
}

export default Details;

// enrollmentno