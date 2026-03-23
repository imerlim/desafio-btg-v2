// src/plugins/msg.ts
import type { App } from 'vue'

export default {
  install: (app: App) => {
    const msg = {
      show(body: string, title = '', type = 'success') {
        window.dispatchEvent(
          new CustomEvent('global-msg', {
            detail: { title, body, type },
          }),
        )
      },
      success(body: string, title = 'Sucesso!') {
        this.show(body, title, 'success')
      },
      error(body: string, title = 'Erro!') {
        this.show(body, title, 'error')
      },
      warning(body: string, title = 'Atenção!') {
        this.show(body, title, 'warning')
      },
      info(body: string, title = 'Informação') {
        this.show(body, title, 'info')
      },
    }

    app.config.globalProperties.$msg = msg
    // Proporciona o plugin para o setup()
    app.provide('msg', msg)
  },
}
