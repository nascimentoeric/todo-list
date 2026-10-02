class TaskDetails extends HTMLElement {

    constructor() {
        super();

        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {

        this.shadowRoot.innerHTML = `
            <style>

                .details-content {
                    margin-top: 20px;
                    background-color: #2a2a2a;
                    border-radius: 8px;
                    padding: 20px;
                }

                .detail-title {
                    font-size: 24px;
                    margin-bottom: 15px;
                }

                .detail-description {
                    color: #cccccc;
                    line-height: 1.6;
                }

                .delete-button {
                    width: 100%;
                    margin-top: 20px;
                    padding: 15px;

                    background-color: #2a2a2a;
                    color: white;

                    border: none;
                    border-radius: 8px;

                    cursor: pointer;

                    text-align: left;
                    font-size: 16px;
                }

                .delete-button:hover {
                    background-color: #383838;
                }

            </style>

            <div class="details-content">

                <p>
                    Selecione uma tarefa para visualizar seus detalhes.
                </p>

            </div>
        `;

        this.detailsContent =
            this.shadowRoot.querySelector(".details-content");
    }


    showTask(task) {

        this.detailsContent.innerHTML = "";

        const title = document.createElement("h3");

        title.textContent = task.title;
        title.classList.add("detail-title");


        const description = document.createElement("p");

        description.textContent = task.description;
        description.classList.add("detail-description");


        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Excluir tarefa";
        deleteButton.classList.add("delete-button");


        this.detailsContent.appendChild(title);
        this.detailsContent.appendChild(description);
        this.detailsContent.appendChild(deleteButton);


        deleteButton.addEventListener("click", () => {

            this.dispatchEvent(
                new CustomEvent("task-deleted", {
                    bubbles: true,
                    composed: true,
                    detail: task
                })
            );

        });
    }


    clear() {

        this.detailsContent.innerHTML = `
            <p>
                Selecione uma tarefa para visualizar seus detalhes.
            </p>
        `;

    }
}


customElements.define("task-details", TaskDetails);