import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { } from 'antd'
// import {connect} from 'react-redux'
// import {} from '@actions/xxx'

// @connect((storeState)=>({}))

export default class app extends Component {
  static defaultProps={
  }

  static propTypes = {
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const id = this.props.params.id;
    console.log(id);
  }
  componentDidUpdate(prevProps) {
    // 上面步骤3，通过参数更新数据
    const id = this.props.params.id;
    console.log(id);
  }
  // #region vscode 1.17的收缩代码块功能  业务代码


  // #endregion

  render() {
    return (
      <div className="page">
        示范页面ahhahahahhahahahahhahahahhahah
      </div>
    )
  }
}
