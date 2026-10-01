class TodoTask extends HTMLElement {

    constructor() {
        super();

        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        const title = this.getAttribute("title");
        const description = this.getAttribute("description");

        this.shadowRoot.innerHTML = `
            <style>

                .task-item {
                    background-color: #2a2a2a;
                    padding: 15px;
                    margin-bottom: 10px;
                    border-radius: 8px;

                    cursor: pointer;

                    transition: background-color 0.2s;
                }

                .task-item:hover {
                    background-color: #383838;
                }

            </style>

            <div class="task-item">
                ${title}
            </div>
        `;

        const taskElement = this.shadowRoot.querySelector(".task-item");

        taskElement.addEventListener("click", () => {

            this.dispatchEvent(
                new CustomEvent("task-selected", {
                    bubbles: true,
                    composed: true,
                    detail: {
                        title: title,
                        description: description
                    }
                })
            );

        });
    }
}

customElements.define("todo-task", TodoTask);

