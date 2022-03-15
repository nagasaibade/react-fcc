import React  from "react";
class ClassBasedComponentPractice extends React.Component{

    render()
    {
        return(
            <div>
            <h2>This is sample header component</h2>
            <Header />
            <h2>Below is sample footer component</h2>
            <Footer name = 'Naga Sai'/>
            </div>
        )
    }
}
class Header extends React.Component{


    render(){
        return(
            <h1>This is from class based component Practice</h1>
        )
    }
}


class Footer extends React.Component{


    render()
    {
        return(
            <h1>
                This is Footer from Class Component. And these are props {this.props.name}
            </h1>
        )
    }
}


export default ClassBasedComponentPractice