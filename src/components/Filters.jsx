import { Link, useParams } from 'react-router-dom';

const Filters = () => {
    const { filter: activeFilter = 'all' } = useParams();

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '0.75rem',
                marginTop: '10px',
            }}
        >
            <Link
                to='/all'
                style={{ color: activeFilter === 'all' ? 'green' : 'black' }}
            >
                all
            </Link>
            <Link
                to='/active'
                style={{ color: activeFilter === 'active' ? 'green' : 'black' }}
            >
                active
            </Link>
            <Link
                to='/completed'
                style={{
                    color: activeFilter === 'completed' ? 'green' : 'black',
                }}
            >
                completed
            </Link>
        </div>
    );
};

export { Filters };
