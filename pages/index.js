// pages/index
import Layout from '../components/Layout';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from '../redux/actions/actionTypes';
const Index = (props) => (
    <Layout title="Index Page">    
        <div>
        <h2 className="title is-2">Authentication with Next.js and JWT</h2>
        <p>A proof of concept app, demonstrating the authentication of Next.js application using JWT.</p>
        <span>{JSON.stringify(props.count)}</span>
        <button onClick={ ()=> { props.incrementCounter()}}>Increment</button>
        <button onClick={ ()=> { props.decrementCounter()}}>Increment</button>
    </div>
    </Layout>
);

export default connect(
    state => state.count,
    { incrementCounter, decrementCounter }
  )(Index);