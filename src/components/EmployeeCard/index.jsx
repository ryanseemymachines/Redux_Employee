const EmployeeCard = ({emp}) => {
  return (
    <div>
        <h3>{emp.name}</h3>
        <p>{emp.designation}</p>
        <p>{emp.dob.toLocaleDateString()}</p>
    </div>
  )
}

export default EmployeeCard;