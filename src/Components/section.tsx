
import styled from 'styled-components'
import BouncingArrow from './BouncingArrow'
import '../Css/section.css';
import { motion } from "framer-motion"
interface Props {
  readonly  image : string ,
  readonly title : string,
  readonly description : string,
}
interface sectionProps {
   readonly imageUrl : string ,

}
interface buttonProps {
   readonly primary : boolean ,
}
const section = (props:Props) => {
  return (
    

    <Section className='scrollChild' imageUrl={`/images/${props.image}`} >

  
    <Details className="carDetails">
        <motion.div className="model"  initial={{ opacity: 0, y : 100, scale : 0.7 }}
  whileInView={{ opacity: 1, y : 0, scale : 1 }}
  viewport={{ once: false }} transition={{ duration: 0.5 }}>
            <h1>{props.title}</h1>
            <p>{props.description}</p>

        </motion.div>


        <LowerSection>
        <motion.div className="ButtonGroups" initial={{ opacity: 0, y : 100, scale : 0.7 }}
  whileInView={{ opacity: 1, y : 0, scale : 1  }}
  viewport={{ once: false }} transition={{ duration: 0.5 }}>
            <Button primary>
                Custom Order

            </Button>
            
              <Button primary = {false}>
                Existing Inventory

            </Button>
        </motion.div>
        <BouncingArrow></BouncingArrow>
        </LowerSection>
    </Details>


    </Section>
  )
}

const Details = styled.div`
// background-color : red ;
display: flex ;
flex-direction : column;
height : 100%;
justify-content : space-between;
align-items : center;
padding-top:120px;


@media (max-width : 500px){
padding-top:80px;

}




`
const Section = styled.section<sectionProps>`

height : 100vh ;
width : 100vw ;
overflow:hidden;
// background-color : yellow ;
background-image :url( ${ ( props:sectionProps) => props.imageUrl });
background-position : center;
background-repeat : no-repeat;
background-size : cover ;
scroll-snap-align: start;


`


const Button = styled.button<buttonProps>`
width : 250px ;
height : 40px ;
border-radius : 50px;
font-size : 13px ;
font-weight : 600;
margin : 10px 15px;
display : inline-block;
background-color : ${(props:buttonProps)=> props.primary ? "var(--btnBgDark)" : "var(--btnBgLight)"};
color : ${(props:buttonProps)=> props.primary ? "White" : ""};
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

@media (max-width:600px){
  margin: 10px auto;
  display :block;
  width : 200px ;
height : 30px ;
}

`

const LowerSection = styled.div`
margin-bottom : 20px;
display : flex;
flex-direction : column ;
align-items : center;

`

export default section

