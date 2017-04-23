import React, {Component} from 'react';
import ReactTable from 'react-table';
import DisplayInfo from './DisplayInfo';
const columns = [{
  header: 'Food',
  columns: [{
    header: 'Name',
    accessor: 'name'
  }, {
    header: 'Url',
    accessor: 'url'
  }, {
    header: 'Phone Number',
    accessor: 'phone'
  }, {
    header: 'Address',
    accessor: 'address'
  }, {
    header: 'City',
    accessor: 'city'
  }, {
    header: 'State',
    accessor: 'state'
  }, {
    header: 'Zip Code',
    accessor: 'zip_code'
  }, {
    header: 'Categories',
    accessor: 'categories'
  }, {
    header: 'Reviews',
    accessor: 'review_count'
  }, {
    header: 'Ratings',
    accessor: 'rating'
  }]
}];


export default class Results extends Component {
	shouldComponentUpdate(nextProps, nextState) {
    // console.log(nextProps, 'props', nextState, 'state');
    return nextProps !== nextState;
  }


  render() {
    // let that = this, queryResult = this.props.result, results = [];
    // // console.log(this.props.result)
    // for (let i = 0; i < queryResult.length; i++) {
    //   // console.log(queryResult[i].address, 'tet')
    //   results.push(<DisplayInfo count={i} name={queryResult[i].name} website={queryResult[i].url} phone={queryResult[i].phone} address={queryResult[i].address} city={queryResult[i].city} stateLocation={queryResult[i].state} zip_code={queryResult[i].zip_code} is_closed={queryResult[i].is_closed} categories={queryResult[i].categories} reviews={queryResult[i].reviews} ratings={queryResult[i].ratings} />);

    // }
    console.log(this.props.result)
    if (Object.keys(this.props.result).length) {
      // {results}
      return (
        <div>
          <ReactTable data={this.props.result} columns={columns} minRows={0} />
        </div>
      )
    } 
    return (
      <div id="fraud" />
    )
  }
}