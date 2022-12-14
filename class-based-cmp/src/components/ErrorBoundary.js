import { Component } from "react";
class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  componentDidCatch(error) {
    this.setstate({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return <p>SomeThing Went Wrong!</p>;
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
