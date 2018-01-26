import React from "react";
import logo from "./../img/logotype.svg";
import Bar from "./bar";
import Ball from "./ball";
import Password from "./password";
 
const AppContent = ({handlechange,
        classvalue,
        checksixcaracters,
        checkonevalue,
        checkoneuppercase,
        barone,
        bartwo,
        barthree,
        classborderpass}) =>(

    <div className="form-found">
		<form action="/"  className="my-form" autocomplete="off">
            <div className="form-header">
                <img src={logo} className="logotype" alt="logotype" />
                <h3 className="create-account-title" >Crie sua conta</h3>
            </div>
            <div className="form-body">
                <div className="form-group col-md-12" >
                        <label className="control-label" htmlFor="nome">Nome completo</label>
                        <input type="text" className="form-control" id="nome"/>
                </div>
                <div className="form-group col-md-12" >
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" />
                </div>

                <Password  handlechange={handlechange} classborderpass={classborderpass}/>

                <div className="bar-group col-md-12">
                        <Bar classtype={barone} />
                        <Bar classtype={bartwo} />
                        <Bar classtype={barthree} />
                </div>
                <div className="ball-group col-md-12 ">
                        <Ball description="Pelo menos 6 caracteres" 
                                classvalue={checksixcaracters} />

                        <Ball description="Pelo menos 1 letra maiuscula"
                                 classvalue={checkoneuppercase}/>

                        <Ball description="Pelo menos 1 número" 
                                classvalue={checkonevalue}/>    

                </div>
                <div className="form-group col-md-12" >
                        <label htmlFor="confirmarsenha">Confirmar sua senha</label>
                        <input type="password" className="form-control" id="confirmarsenha" />
                </div>
            </div>
            <div className="form-group col-md-12" >
                <button type="submit" className="btn-my btn-sucess-my">Criar Conta</button>
            </div>
        </form>		
		
	</div>
)

    


export default AppContent;