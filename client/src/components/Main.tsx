import React, { Component } from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { ActionCreator, ActionCreatorsMapObject, bindActionCreators } from 'redux';
import { IAction } from '../interfaces/action.interface';
import { IAppState } from '../reducers/reducer';
import { TestActionCreators } from '../utilities/test-action.creators';
import './Main.css';

interface IMainProps {
  isLoading: boolean;
  message: string;
  dispatchApiTestStart?: ActionCreator<IAction>;
}

class Main extends Component<IMainProps> {

  public onPingClick = () => {
    this.props.dispatchApiTestStart();
  }

  public render(): JSX.Element {
    return (
      <div className="app-container">
        <div className="header">
          <div className="header-row">
            <div>
              <h1>ts-node-template <span>by Kovaja</span></h1>
            </div>
          </div>
        </div>

        <div className="content">
          <div style={{ textAlign: 'center' }}>
            <button className="pure-button" type="button" onClick={this.onPingClick}>PING</button>
            <p>{this.props.isLoading ? 'LOADING...' : null}</p>
            <p>{this.props.message}</p>
          </div>
        </div>

        <div className="footer">
          <span>ts-node-template by Kovaja</span>
          <span>
            2019
            <span className="version">(0.0.1)</span>
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps: MapStateToProps<IMainProps, any, IAppState> = (state: IAppState): IMainProps => {
  return {
    isLoading: state.isLoading,
    message: state.testMessage
  };
};

const mapDispatchToProps = (dispatch: any): ActionCreatorsMapObject<IAction> => {
  return bindActionCreators<IAction, ActionCreatorsMapObject<IAction>>(
    {
      dispatchApiTestStart: TestActionCreators.testApiStart
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
