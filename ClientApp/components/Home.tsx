import * as React from 'react';

export class Home extends React.Component<any, void> {
    public render() {
        return <div>
            <h1>Hello, world!</h1>
            <p>Welcome to your new single-page application, built with:</p>
            <ul>
                <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a></li>
                <li><a href='https://facebook.github.io/react/'>React</a> and <a href='http://www.typescriptlang.org/'>TypeScript</a> for client-side code</li>
                <li><a href='https://webpack.github.io/'>Webpack</a></li>
                <li><a href='http://getbootstrap.com/'>Bootstrap</a></li>
            </ul>
            
        </div>;
    }
}
