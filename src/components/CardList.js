
import Card from "./card";

const CardList = ({robots}) =>{
    // if (true){
    //     throw new Error('NOOOOOOO!!!')
    // }
    const robofriendsComp = robots.map((robot, idx) =>{
        return(
            <Card 
                key={idx} 
                id={robots[idx].id} 
                name={robots[idx].name} 
                desc={robots[idx].desc} 
            />
        );
    })

    return(
        <div>
            {robofriendsComp}
        </div>
    )
}

export default CardList