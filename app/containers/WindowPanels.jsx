/* @flow weak */
import React, { Component } from 'react'
import { connect } from 'react-redux'

import store from '../store.js'
import PanelAxis from '../components/Panel'
import PanesContainer from '../components/Pane'
import TabViewContainer from '../components/Tab'
import Terminal from '../components/Terminal'
import FileTree from '../components/FileTree'

var PanelConfig = {
  flexDirection: 'row',
  views: [
    {
      flexDirection: 'column',
      size: 20,
      views: [<FileTree />]
    }, {
      flexDirection: 'column',
      size: 80,
      views: [{
          flexDirection: 'row',
          size: 75,
          views: [<PanesContainer />]
        }, {
          flexDirection: 'row',
          views: [<TabViewContainer defaultContentClass={Terminal} defaultContentType='terminal' />],
          size: 25
        }
      ]
    }, {
      flexDirection: 'row',
      size: 20,
      views: ['Right Panel'],
      display: 'none'
    }
  ]
}

const PrimaryPanelAxis = connect(state => {
  return state.WindowPaneState
})(PanelAxis)

const WindowPanels = (props) => {
  store.dispatch({
    type: 'PANEL_INITIALIZE',
    scope: 'window',
    config: PanelConfig
  })

  return (<PrimaryPanelAxis scope='window' className='primary-panel-axis' />)
}

export default WindowPanels
