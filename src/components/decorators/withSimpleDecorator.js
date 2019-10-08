export default function(TargetClass) {
    return class extends TargetClass {
        constructor(props) {
            super(props);
        }
  
        componentDidMount() {
            super.componentDidMount();
            console.log('Call__higher__componentDidMount');
        }
  
        componentWillUnmount() {
            super.componentWillUnmount();
            console.log('Call__higher__componentWillUnmount');
        }

        onTitlePress = () => {
            console.log('in--decorator--handler-----Pressed-----');
        }
    }
}
