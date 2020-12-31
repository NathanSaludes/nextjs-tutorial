import ClientSideDataFetchingComponent from '../components/ClientSideDataFetchingTest'
import Layout from '../components/layout'

export default function Test() {
	return (
		<Layout>
			<div>
				<p>What you will see below this text is a sample data fetched from an API upon page request. This is done on the client side but the rest of the page is pre-rendered (statically generated).</p>
				<p>There is a 3 second timeout before executing the request to practically demonstrate the data hydration</p>
				<ClientSideDataFetchingComponent />
			</div>
		</Layout>
	)
}

