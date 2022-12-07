import Header from "./Header";
import PropTypes from 'prop-types';

export default function Page({ children }) {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
}

Page.propTypes = {
    children: PropTypes.string,
};