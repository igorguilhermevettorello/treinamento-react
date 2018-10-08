import React, { Component } from "react";

export default class Autores extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">Autores</div>
        <div className="card-body">
          <form>
            <div className="input-group input-group-sm mb5">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-sm">
                  Nome
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                aria-label="Nome"
                aria-describedby="inputGroup-sizing-sm"
              />
            </div>

            <div className="input-group input-group-sm mb5">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-sm">
                  Email
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                aria-label="Email"
                aria-describedby="inputGroup-sizing-sm"
              />
            </div>

            <div className="input-group input-group-sm mb5">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-sm">
                  Senha
                </span>
              </div>
              <input
                type="password"
                className="form-control"
                aria-label="Senha"
                aria-describedby="inputGroup-sizing-sm"
              />
            </div>
            <div className="pull-right mb5">
              <button type="button" className="btn btn-primary btn-sm">
                Salvar
              </button>
            </div>
            <div>
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
