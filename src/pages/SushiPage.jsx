import workflow from '../assets/images/Workflow.png'

const SushiPage = () => {
    return (
        <div>
            <div style={{ width: '800px', margin: '0 auto', justifyContent: 'center' }} className="box">
                <h1 style={{ marginTop: '40px', textAlign: 'center' }}>Workflow on the page</h1>
                <img style={{ width: '600px', marginTop: '20px' }} src={workflow} alt="" />
            </div>
        </div>
    );
};

export default SushiPage;
