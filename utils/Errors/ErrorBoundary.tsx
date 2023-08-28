import { Component, ErrorInfo } from "react";

import React from 'react'
type errorChildProps = {
    error?:Error
}
export const ErrorChild = ({error}:errorChildProps) => {
    const reload = ()=>{
        window.history.go(0)
    }
  return (
    <div>
        
        {error?.message}
        <button onClick={reload}>reload/return</button>
        </div>
  )
}



interface Props {
  children?: React.ReactNode;
  fallback?:React.ReactNode
}

interface State {
  hasError: boolean;
  error:any

}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error:null
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true,error:error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {

    console.error("Uncaught error",error,errorInfo); 
  }

  public render() {
    if (this.state.hasError) {
      return <ErrorChild error={this.state.error}/>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;