import React from "react";
import propTypes from "prop-types"

const Password = ({handlechange,classborderpass}) =>(
    <div className="form-group col-md-12" >
                        <label htmlFor="senha">Senha</label>
                        <input type="password" className={`form-control ${classborderpass}`} id="senha" onChange={handlechange} />
    </div>
)



Password.propTypes = {
    handlechange: propTypes.func.isRequired
}








export default Password;
