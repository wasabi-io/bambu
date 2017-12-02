import * as React from "react";
import Table from "rebul/lib/elements/table/Table";
import THead from "rebul/lib/elements/table/THead";
import Row from "rebul/lib/elements/table/Row";
import HCell from "rebul/lib/elements/table/HCell";
import TFoot from "rebul/lib/elements/table/TFoot";
import TBody from "rebul/lib/elements/table/TBody";
import Cell from "rebul/lib/elements/table/Cell";
import FaIcon from "rebul/lib/elements/icon/FaIcon";

const ProgressSample: React.SFC<{}> = (props: {}) => {

    return (
        <div>
            <Table>
                <THead>
                <Row>
                    <HCell>Name</HCell>
                    <HCell>InsTrument</HCell>
                    <HCell></HCell>
                    <HCell></HCell>
                </Row>
                </THead>
                <TFoot>
                <Row>
                    <HCell className="sad">Name</HCell>
                    <HCell>InsTrument</HCell>
                    <HCell></HCell>
                    <HCell></HCell>
                </Row>
                </TFoot>
                <TBody>
                <Row>
                    <Cell>Misty Abbott</Cell>
                    <Cell>Bass Guitar</Cell>
                    <Cell icon >
                        <a href="#">
                            <FaIcon name="twitter" />
                        </a>
                    </Cell>
                    <Cell icon>
                        <a href="#">
                            <FaIcon name="instagram" />
                        </a>
                    </Cell>
                </Row>
                <Row>
                    <Cell>John SmiTh</Cell>
                    <Cell>RhyThm Guitar</Cell>
                    <Cell icon >
                        <a href="#">
                            <FaIcon name="twitter" />
                        </a>
                    </Cell>
                    <Cell icon>
                        <a href="#">
                            <FaIcon name="instagram" />
                        </a>
                    </Cell>
                </Row>
                <Row>
                    <Cell>Robert Mikels</Cell>
                    <Cell>Lead Guitar</Cell>
                    <Cell icon >
                        <a href="#">
                            <FaIcon name="twitter" />
                        </a>
                    </Cell>
                    <Cell icon>
                        <a href="#">
                            <FaIcon name="instagram" />
                        </a>
                    </Cell>
                </Row>
                </TBody>
            </Table>
        </div>
    )
};

export default ProgressSample;
