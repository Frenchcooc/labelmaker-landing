/**
 * Polyfill for Element.closest()
 * see: https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
 */

if (Element && !Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector
}

if (Element && !Element.prototype.closest) {
  Element.prototype.closest = function(s) {
    var el = this

    do {
      if (el.matches(s)) return el
      el = el.parentElement || el.parentNode
    } while (el !== null && el.nodeType === 1)
    return null
  }
}

document.addEventListener('click', function(event) {
  var element = event.target || event.srcElement

  if (!element.closest || !SheetApp || !SheetApp.isAutocompleteActive) {
    return
  }

  var closest = element.closest('.autocomplete')
  if (!closest) {
    SheetApp.hideAutocomplete()
  }
})

/**
 * Labels names (names only, sizes are backend-only)
 *
 * PS: Looking for a new indie project? <(^_^)>
 * Let's talk first! Shoot me an email: frenchcooc [at] gmail.com
 */
;(function(manufacturers, labels) {
  window._storage = {
    TOP_LABELS: [],
    ALL_LABELS: []
  }

  for (var j = 0, o = labels.length; j < o; j++) {
    var label = labels[j]

    var id = label[0]
    var prefix = id.substr(0, 3)
    var manufacturer = manufacturers[prefix] || ''

    label[1] = manufacturer + ' - ' + label[1]
    window._storage.ALL_LABELS.push(label)

    if (label.length > 2) {
      window._storage.TOP_LABELS.push(label)
    }
  }
})(
  {
    AA4: 'Avery A4',
    AUS: 'Avery US Letter'
  },
  [
    ['AUS-AA', '5160 Easy Peel ® Address Labels', 'recommended'],
    ['AUS-AC', '5260 Easy Peel ® Address Labels', 'recommended'],
    ['AUS-AE', '5520 White Waterproof Address Labels'],
    ['AUS-AF', '5620 Address Labels'],
    ['AUS-AG', '5630 Matte Clear Address Labels'],
    ['AUS-AH', '5660 Matte Clear Address Labels'],
    ['AUS-AJ', '5960 Easy Peel ® Address Labels'],
    ['AUS-AL', '6240 Address Labels'],
    ['AUS-AM', '6521 Easy Peel ® Address Labels'],
    ['AUS-AN', '6525 Easy Peel ® Address Labels'],
    ['AUS-AO', '6526 Easy Peel ® Address Labels'],
    ['AUS-AP', '6585 Easy Peel ® Address Labels'],
    ['AUS-AQ', '8160 Easy Peel ® Address Labels'],
    ['AUS-AS', '8215 Pearlized Address Labels'],
    ['AUS-AT', '8250 Vibrant Color Printing Address Labels'],
    ['AUS-AU', '8460 Easy Peel ® Address Labels'],
    ['AUS-AV', '8620 Address Labels'],
    ['AUS-AW', '8660 Matte Clear Address Labels'],
    ['AUS-AY', '8860 Easy Peel ® Address Labels'],
    ['AUS-BA', '8920 Address Labels'],
    ['AUS-BB', '15660 Matte Clear Address Labels'],
    ['AUS-BD', '15700 Address Labels'],
    ['AUS-BE', '15960 Address Labels for Automatic Label Peeler'],
    ['AUS-BF', '16460 Removable Multiuse Labels'],
    ['AUS-BG', '16790 White Mailing Address Labels Easy Peel'],
    ['AUS-BH', '18160 Easy Peel ® Address'],
    ['AUS-BJ', '18260 Easy Peel ® Address'],
    ['AUS-BK', '18660 Matte Clear Address Labels'],
    ['AUS-BM', '22837 Pearlized Address Labels'],
    ['AUS-BN', '28660 Address Labels'],
    ['AUS-BO', '32660 Address Labels'],
    ['AUS-BP', '38260 EcoFriendly Address Labels'],
    ['AUS-BQ', '45160 Address Labels'],
    ['AUS-BR', '48160 EcoFriendly White Address Labels'],
    ['AUS-BS', '48260 EcoFriendly Address Labels'],
    ['AUS-BU', '48360 EcoFriendly Address Labels'],
    ['AUS-BV', '48460 EcoFriendly White Address Labels'],
    ['AUS-BX', '48860 EcoFriendly White Address Labels'],
    ['AUS-BZ', '48960 EcoFriendly White Address Labels'],
    ['AUS-CA', '55160 Repositionable Address Labels'],
    ['AUS-CB', '55360 Address Labels'],
    ['AUS-CC', '58160 Repositionable Address Labels'],
    ['AUS-CD', '58660 Address Labels'],
    ['AUS-CE', '75160 Address Labels'],
    ['AUS-CF', '80509 Pearlized Address Labels'],
    ['AUS-CG', '85560 Easy Peel ® White Address Labels'],
    ['AUS-CH', '88560 Address Labels'],
    ['AUS-CI', '95520 White Waterproof Labels'],
    ['AUS-CK', '95915 Easy Peel ® Address Labels'],
    ['AUS-CL', 'Presta 94200 Blank Rectangle Labels'],
    ['AUS-CM', '5167 Easy Peel ® Return Address Labels', 'recommended'],
    ['AUS-CN', '5267 Easy Peel ® Return Address Labels'],
    ['AUS-CO', '15667 Matte Clear Return Address Labels'],
    ['AUS-CP', '18167 Easy Peel ® Return Address Labels'],
    ['AUS-CQ', '18667 Matte Clear Return Address Labels'],
    ['AUS-CR', '48267 EcoFriendly Return Address Labels'],
    ['AUS-CS', '48467 EcoFriendly White Return Address Labels'],
    ['AUS-CT', '48867 EcoFriendly Return Address Labels'],
    ['AUS-CV', '5667 Matte Clear Return Address Labels'],
    ['AUS-CW', '5967 Return Address Labels'],
    ['AUS-CX', '8167 Easy Peel ® Return Address Labels'],
    ['AUS-CY', '8667 Matte Clear Return Address Labels'],
    ['AUS-CZ', '8867 Easy Peel ® Return Address Labels'],
    ['AUS-DA', '95667 Return Address Labels'],
    ['AUS-DB', 'Presta 94203 Blank Rectangle Labels'],
    ['AUS-DP', '5161 Easy Peel ® Address Labels', 'recommended'],
    ['AUS-DQ', '5261 Easy Peel ® Address Labels'],
    ['AUS-DR', '5961 Easy Peel ® Address Labels'],
    ['AUS-DT', '8461 Easy Peel ® Address Labels'],
    ['AUS-DU', 'Presta 94202 Blank Rectangle Labels'],
    ['AA4-EA', 'L7159 Address Labels', 'recommended'],
    ['AA4-EB', 'L7160 Address Labels'],
    ['AA4-EC', 'L7161 Address Labels'],
    ['AA4-ED', 'L7162 Address Labels'],
    ['AA4-EE', 'L7163 Address Labels'],
    ['AA4-EF', 'L7164 Address Labels'],
    ['AA4-EG', 'J8159 Address Labels'],
    ['AA4-EH', 'J8160 Address Labels', 'recommended'],
    ['AA4-EI', 'J8161 Address Labels'],
    ['AA4-EJ', 'J8162 Address Labels'],
    ['AA4-EK', 'J8163 Address Labels'],
    ['AA4-EL', 'J8165 Parcel Labels'],
    ['AA4-EM', 'J8166 Parcel Labels'],
    ['AA4-EN', 'J8167 Parcel Labels'],
    ['AA4-EP', 'J8169 Parcel Labels'],
    ['AA4-EQ', 'J8173 Shipping Labels'],
    ['AA4-ER', 'J8651 Mini Address Labels'],
    ['AA4-ES', 'J8654 Mini Organising Labels'],
    ['AA4-ET', 'J8656 Mini Organising Labels']
  ]
)
