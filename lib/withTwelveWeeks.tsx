import { Component, ComponentType } from 'react';
import { connect } from 'react-redux';
import { getTwelveWeeks } from '../store/actions/twelveWeeks';

export default function withTwelveWeeks(WrappedComponent: ComponentType<{}>) {
  class WithTwelveWeeksComponent extends Component {
    componentDidMount = () => {
      this.props.getTwelveWeeks();
    }
    render() {
      return (
        this.props.isLoading ? 'LOADING' : <WrappedComponent {...this.props} />
      );
    }
  }
  const mapStateToProps = state => ({
    isLoading: state.uiStore.isLoading,
    twelveWeeks: state.twelveWeeksStore.twelveWeeks,
  });
  return connect(mapStateToProps, { getTwelveWeeks })(WithTwelveWeeksComponent);
}
