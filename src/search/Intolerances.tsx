import Container from "react-bootstrap/Container";

export type IntolerancesProps = {
    intolerances: boolean[],
    setIntolerances: (intolerances: boolean[]) => void,
    intoleranceNames: string[],
}

export default function Intolerances({intolerances, setIntolerances, intoleranceNames}: IntolerancesProps) {
    const checkBoxes = [];
    for (let i = 0; i < intoleranceNames.length / 4; i++) {
        const k = i * 4; // jsx wouldn't let i+=4 be used in the loop, so this is the workaround
        checkBoxes.push(
            <Container className="d-flex justify-content-center align-items-center flex-wrap flex-sm-nowrap" key={k}>
                <div className="form-check form-check-inline">
                    <input className="btn-check" type="checkbox" value="" id={intoleranceNames[k]}
                           onClick={() => toggleIntolerance(intolerances, k, setIntolerances)}/>
                    <label className="btn btn-sm btn-outline-warning" htmlFor={intoleranceNames[k]}>
                        {intoleranceNames[k]}
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="btn-check" type="checkbox" value="" id={intoleranceNames[k + 1]}
                           onClick={() => toggleIntolerance(intolerances, k + 1, setIntolerances)}/>
                    <label className="btn btn-sm btn-outline-warning" htmlFor={intoleranceNames[k + 1]}>
                        {intoleranceNames[k + 1]}
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="btn-check" type="checkbox" value="" id={intoleranceNames[k + 2]}
                           onClick={() => toggleIntolerance(intolerances, k + 2, setIntolerances)}/>
                    <label className="btn btn-sm btn-outline-warning" htmlFor={intoleranceNames[k + 2]}>
                        {intoleranceNames[k + 2]}
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="btn-check" type="checkbox" value="" id={intoleranceNames[k + 3]}
                           onClick={() => toggleIntolerance(intolerances, k + 3, setIntolerances)}/>
                    <label className="btn btn-sm btn-outline-warning" htmlFor={intoleranceNames[k + 3]}>
                        {intoleranceNames[k + 3]}
                    </label>
                </div>
            </Container>
        )
    }
    return (
        <Container className="d-flex justify-content-center align-items-center flex-column col-8 col-lg-6 p-2">
            <div>
                Please choose intolerances:
            </div>
            {checkBoxes}
        </Container>
    );
}

function toggleIntolerance(intolerances: boolean[], index: number, setIntolerances: (intolerances: boolean[]) => void) {
    intolerances[index] = !intolerances[index];
    setIntolerances(intolerances);
}