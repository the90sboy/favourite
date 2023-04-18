import React from "react";
import Description from "./Description";
import Image from "./Image";
import Title from "./Title";

class MyFav extends React.Component{
    render(){
        return(
            <div className="flex">
                <div>
                    <Image/>
                </div>
                <div>
                    <Title title="Gordon Ramsay"/>
                    <Description description="Known for his volatile kitchen demeanour and exceptional British cuisine, Gordon Ramsay is arguably the most famous chef in the world.
                                            Although he been awarded 16 Michelin stars throughout his career, he currently holds seven. 
                                            His signature restaurant, Restaurant Gordon Ramsay in London, has held 3 stars since 2001, making it London longest-running three Michelin-starred restaurant.
                                            The Scottish born chef, restaurateur, and television personality is attached to 35 restaurants globally. 
                                            Hes made his way onto television screens in just about every part of the English-speaking world,
                                            creating a highly successful empire. In 2019 Gordon Ramsay was the 35th highest-earning celebrity in the world on  Forbes list; one up on Rihanna. 
                                            As of 2020, Gordon Ramsay net worth is estimated at $220 million,
                                            most of which comes from his popular TV shows like Hells Kitchen, Kitchen Nightmares and Master Chef."
                    />
                </div>
            </div>
        )
    }
}

export default MyFav