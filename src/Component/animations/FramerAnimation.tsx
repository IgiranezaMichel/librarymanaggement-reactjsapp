import {motion} from 'framer-motion'
const FramerAnimation=()=>{
    return(<>
    <motion.div
    animate={{
        x:100,
        opacity:1
    }}
    >
        Hello Mike
    </motion.div>
    </>)
}
export default FramerAnimation;