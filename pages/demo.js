import Layout from '../components/Layout.js'
import Triangle from '../components/triangle.js'
  import Regl from 'react-regl';

export default () => (
    <Layout>
       <p>This is the demo page</p>

       <Regl width={window.innerWidth}
       height={window.innerHeight}
       console.log("HELLO")
       onFrame={this.onFrameHandler.bind(this)}>

       <Triangle color={[1,1,0.5,1]}
       positions={[[-0.5, 0],[0, -0.5],[0.25, 1]]} />
       </Regl >

    </Layout>

)
