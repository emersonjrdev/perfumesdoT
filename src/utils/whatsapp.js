const WHATSAPP_LINK = 'https://wa.me/message/XRY3ZML54HGNE1'

export function buildWhatsAppLink(product) {
  const mensagem = encodeURIComponent(
    `Ola! Tenho interesse no perfume abaixo:\n\n` +
      `🌸 *${product.name}*\n` +
      `🏷️ Marca: ${product.brand}\n` +
      `💧 Concentração: ${product.concentration}\n` +
      `📦 Tamanho: ${product.size}\n` +
      `💰 Preço: R$ ${product.price.toFixed(2).replace('.', ',')}\n\n` +
      `Poderia me passar mais informações e disponibilidade?`,
  )
  return `${WHATSAPP_LINK}?text=${mensagem}`
}

export function buildCartWhatsAppLink(items) {
  const lista = items
    .map(
      (i) =>
        `• ${i.name} (${i.concentration} ${i.size}) x${i.quantity} — R$ ${(
          i.price * i.quantity
        )
          .toFixed(2)
          .replace('.', ',')}`,
    )
    .join('\n')

  const total = items.reduce((s, i) => s + i.price * i.quantity, 0)
  const mensagem = encodeURIComponent(
    `Ola! Gostaria de finalizar o meu pedido:\n\n${lista}\n\n` +
      `💰 *Total: R$ ${total.toFixed(2).replace('.', ',')}*\n\n` +
      `Poderia confirmar disponibilidade e formas de pagamento?`,
  )

  return `${WHATSAPP_LINK}?text=${mensagem}`
}
