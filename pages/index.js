import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import actions from '../actions'
import Layout from '../layouts/Main'

const Home = ({ initialize, loading, host }) =>
  <Layout title={`home | ${host}`}>
    { (loading) ? <h3>Off</h3> : <h3>On</h3> }
    <button onClick={initialize}>Click</button>
  </Layout>

/* -------------------------------------------------------------------------------- */

Home.getInitialProps = async (ctx) => {
  let host = (ctx.res) ? ctx.req.headers.host : window.location.hostname

  return {
    host
  }
}

/* -------------------------------------------------------------------------------- */

Home.propTypes = {
  loading: PropTypes.bool.isRequired
}

/* -------------------------------------------------------------------------------- */

export default connect(
  state => ({
    loading: state.home.loading
  }),

  dispatch => ({
    initialize: () => {
      dispatch(actions.home.initialize())
    }
  })
)(Home)
