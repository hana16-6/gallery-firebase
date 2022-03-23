import React from 'react'
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion/dist/es/index'

const ImageGrid = ({ setSelectedImg }) => {
    const { docs } = useFirestore('images');
    console.log(docs)
    return (
        <motion.div className='img-grid'>{docs && docs.map(doc => (<div className='img-wrap' key={doc.id}
            layout
            whileHover={{ opacity: 1 }}
            onClick={() => setSelectedImg(doc.url)}
        >
            <img src={doc.url} alt='' />
        </div>)

        )}</motion.div>
    )
}

export default ImageGrid