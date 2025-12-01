import Illustration from './Illustration';
import Button from './Button';

const palette = {
    lightpurple: "#e9c3e9",
    boldpurple: "#4f2273",
    redwine: "#770016",
    cyan: "#c9d6ff",
    white: "#e2e2e2",
    char: "#757575",
    black: "#000",
};

function Section({
    heading,
     image,
      descr,
       btn,
        sectionBg="lightpurple",
         headColor="boldpurple",
          pColor="white",
           btnBg,
}){

    return(

        <section style={{backgroundColor: palette[sectionBg]}}>

            <Illustration  text={image}/>

            <div className="container-main">

                <h1 
                className='text-[35px] font-[500] text-capitalize'  
                style={{color: palette[headColor]}}>
                     {heading} 
                </h1>
        
                <p 
                className='text-[30px] line-height-[35px]'
                style={{color: palette[pColor]}}
                >
                     {descr} 
                </p>

                <Button text={btn} style={{backgroundColor: palette[btnBg]}}/>


            </div>


        </section>

    )

}

export default Section;