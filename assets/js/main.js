// aplicativo para calcular se compensa imbuement com GT ou com itens de criatura
do {
  let goldToken = parseFloat(
    prompt('Digite o valor do Gold token ') * 6 + 150000
  )

  // Item Tier 1
  console.log('\n\nImbuement Basic')
  let nameTier1 = prompt('Digite o nome do item: ')
  let quantityTier1 = parseFloat(prompt('Digite a quantidade de itens: '))
  let itemTier1 = parseFloat(prompt('Digite o preço'))
  let precoTier1 = parseFloat(itemTier1 * quantityTier1)

  // Item Tier 2
  console.log('\n\nImbuement Intricate')
  let nameTier2 = prompt('Digite o nome do item: ')
  let quantityTier2 = parseFloat(prompt('Digite a quantidade de itens '))
  let itemTier2 = parseFloat(prompt('Digite o preço'))
  let precoTier2 = parseFloat(itemTier2 * quantityTier2)

  //Item Tier 3
  console.log('\n\nImbuement Powerful')
  let nameTier3 = prompt('Digite o nome do item: ')
  let quantityTier3 = parseFloat(prompt('Digite a quantidade de itens: '))
  let itemTier3 = parseFloat(prompt('Digite o preço'))
  let precoTier3 = parseFloat(itemTier3 * quantityTier3)

  let creatureProducts = parseFloat(
    precoTier1 + precoTier2 + precoTier3 + 150000
  )

  console.log(
    '\n\nO valor do goldToken é de ' +
      goldToken +
      '\nO valor dos produtos de criatura é de ' +
      creatureProducts
  )

  if (creatureProducts < goldToken) {
    console.log('\n\nVale a pena usar creature Products!!')
  } else {
    console.log('\n\nMelhor usar Gold Tokens')
  }

  // calcular em quantos k/hr será preciso para pagar o imbuement

  let choose = prompt(
    'Para usar gold Token digite 1, para usar creature Products digite 2'
  )

  if (choose == '1') {
    let hourToPay = goldToken / 20
    console.log('Será preciso: ' + hourToPay + 'k/hr para pagar o imbuement')
  } else if (choose == '2') {
    let hourToPay = creatureProducts / 20
    console.log('Será preciso: ' + hourToPay + 'k/hr para pagar o imbuement')
  }

  var repeat = prompt('Deseja realizar um novo calculo? (sim) ou (nao)')
} while (repeat == 'sim')

alert('Até logo!')
