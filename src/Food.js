import React from 'react'


const Recipe = (props) =>{
    const {recipes} = props;
    return(
        <>
        <div className="container">
            <div className="row">
                {
                    recipes.map(recipe => (
                        <div className="col-md-4 mx-auto py-3">
                            <div className="card" >
                                <img className="card-img-top" src={recipe.recipe.image} alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">{recipe.recipe.label}</h5>
                                   
                                    <ul className="list-group list-group-flush">
                                        {recipe.recipe.ingredientLines.map(ingridents =>(
                                            <li className="list-group-item">{ingridents}</li>
                                        ))}
                                    </ul>
                                </div>
                                </div>
                         </div>   
                    ))
                }
            </div>
            </div>
           
        </>
    )
}

export default Recipe;