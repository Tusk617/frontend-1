import React from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios'

export default function LandingPage() {
    const Home = () => {
        const { location } = useHistory();
        const { updateRecipes } = useContext(RecipeContext);
    
        useEffect(() => {
            axiosWithAuth()
              .get("/recipes")
              .then(res => {
                  console.log(res.data)
                updateRecipes(res.data)
              } )
              .catch(err => console.log(err.response));
          }, [location]);
    
        return (
            <div>
            </div>
        )
    };
}
    export default Home;
