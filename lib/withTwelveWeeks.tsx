import { Component, ComponentType } from 'react';
import { connect } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import { getTwelveWeeks } from '../store/actions/twelveWeeks';

export default function withTwelveWeeks(WrappedComponent: ComponentType<{}>) {
  class WithTwelveWeeksComponent extends Component {
    componentDidMount = () => {
      this.props.getTwelveWeeks();
    }

    renderLoading = () => {
      return (
        <ClipLoader
          sizeUnit="px"
          size={150}
          color="#123abc"
          loading={this.props.isLoading}
        />
      );
    }
    render() {
      return (
        this.props.isLoading ? this.renderLoading() : <WrappedComponent {...this.props} />
      );
    }
  }
  const mapStateToProps = state => ({
    isLoading: state.uiStore.isLoading,
    twelveWeeks: state.twelveWeeksStore.twelveWeeks,
  });
  return connect(mapStateToProps, { getTwelveWeeks })(WithTwelveWeeksComponent);
}
