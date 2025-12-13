import React from 'react'
import modelStyle from './Modal.module.css';
import classNames from 'classnames';

const ModalForm = ({ modalState, setModalState }) => {
    return (
        <div className={classNames("modal fade show", {
            [modelStyle.showModal]: modalState
        })} id="modal-xl"
        >
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Extra Large Modal</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setModalState(false)}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div class="col-md-12">
                            <div class="card card-primary">
                                <form>
                                    <div class="card-body">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Email address</label>
                                            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputPassword1">Password</label>
                                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputFile">File input</label>
                                            <div class="input-group">
                                                <div class="custom-file">
                                                    <input type="file" class="custom-file-input" id="exampleInputFile" />
                                                    <label class="custom-file-label" for="exampleInputFile">Choose file</label>
                                                </div>
                                                <div class="input-group-append">
                                                    <span class="input-group-text">Upload</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                        </div>
                                    </div>

                                    <div class="card-footer">
                                        <button type="submit" class="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer justify-content-between">
                        <button type="button" className="btn btn-default" data-dismiss="modal" onClick={() => setModalState(false)}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalForm