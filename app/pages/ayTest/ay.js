import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import {} from 'antd'
// import {connect} from 'react-redux'
// import {} from '@actions/xxx'
import { Table } from 'antd'
// @connect((storeState)=>({}))
import '@styles/ayTest.less'

export default class app extends Component {
    static defaultProps = {}

    static propTypes = {}

    constructor(props) {
      super(props)
      this.state = {
        dataSource: [{
          key: '1',
          name: '胡彦斌',
          age: 32,
          address: '西湖区湖底公园1号',
        },
        {
          key: '2',
          name: '胡彦祖',
          age: 42,
          address: '西湖区湖底公园1号',
        },
        ],
        columns: [{
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '年龄',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: '住址',
          dataIndex: 'address',
          key: 'address',
        },
        ],
      }
    }
    componentDidMount() {
      const { id } = this.props.params;
    }
    componentDidUpdate(prevProps) {
      // 上面步骤3，通过参数更新数据
      const id = this.props.params.id;
      console.log(id);
    }
    getTable() {
      const { dataSource, columns } = this.state;
      return (<Table dataSource={dataSource} columns={columns} />)
    }
    // #region vscode 1.17的收缩代码块功能  业务代码
    // #endregion

    render() {
      const { params } = this.props
      return (
        <div className="page">
          <h1>ayTest示范页面</h1>
          <p>我要根据id：{params.id} 渲染页面</p>
          <div className="ayTable">{this.getTable()}</div>
        </div>
      )
    }
}
