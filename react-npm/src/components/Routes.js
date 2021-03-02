import { Switch, Route } from 'react-router-dom';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import EmailSent from './EmailSent';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/"><About /></Route>
            <Route exact path="/portfolio"><Portfolio /></Route>
            <Route exact path="/contact"><Contact /></Route>
            <Route exact path="/contact/email_sent"><EmailSent /></Route>
        </Switch>
    )
}