export function UserList() {
    const users = [
        { Name: "John Smith", Position: "Manager", Office: "Tel Aviv" },
        { Name: "John Smith", Position: "Manager", Office: "Tel Aviv" },
        { Name: "John Smith", Position: "Manager", Office: "Tel Aviv" },
        { Name: "John Smith", Position: "Manager", Office: "Tel Aviv" },
        { Name: "John Smith", Position: "Manager", Office: "Tel Aviv" },
    ];

    return (
        <div className="col-md-12">
            <div className="card">
                <div className="card-header">
                    <div className="d-flex align-items-center">
                        <h4 className="card-title">Add Row</h4>
                        <button className="btn btn-primary btn-round ml-auto" data-toggle="modal" data-target="#addRowModal">
                            <i className="fa fa-plus" />
                            Add Row
                        </button>
                    </div>
                </div>
                <div className="card-body">
                    {/* Modal */}
                    <div className="modal fade" id="addRowModal" tabIndex={-1} role="dialog" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header border-0">
                                    <h5 className="modal-title">
                                        <span className="fw-mediumbold">New</span>
                                        <span className="fw-light">Row</span>
                                    </h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <p className="small">Create a new row using this form, make sure you fill them all</p>
                                    <form>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="form-group form-group-default">
                                                    <label>Name</label>
                                                    <input id="addName" type="text" className="form-control" placeholder="fill name" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 pr-0">
                                                <div className="form-group form-group-default">
                                                    <label>Position</label>
                                                    <input id="addPosition" type="text" className="form-control" placeholder="fill position" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group form-group-default">
                                                    <label>Office</label>
                                                    <input id="addOffice" type="text" className="form-control" placeholder="fill office" />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer border-0">
                                    <button type="button" id="addRowButton" className="btn btn-primary">
                                        Add
                                    </button>
                                    <button type="button" className="btn btn-danger" data-dismiss="modal">
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="table-responsive">
                        <table id="add-row" className="display table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th style={{ width: "10%" }}>Action</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Action</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {users.map((u) =>
                                    <tr>
                                        <td>{u.Name}</td>
                                        <td>{u.Position}</td>
                                        <td>{u.Office}</td>
                                        <td>
                                            <div className="form-button-action">
                                                <button type="button" data-toggle="tooltip" title className="btn btn-link btn-primary btn-lg" data-original-title="Edit Task">
                                                    <i className="fa fa-edit" />
                                                </button>
                                                <button type="button" data-toggle="tooltip" title className="btn btn-link btn-danger" data-original-title="Remove">
                                                    <i className="fa fa-times" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
