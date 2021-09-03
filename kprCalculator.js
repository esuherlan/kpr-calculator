if(document.readyState !== 'loading') {
   init();
} else if(document.addEventListener) {
   document.addEventListener('DOMContentLoaded', function() {
      init();
   });
} else {
   document.attachEvent('onreadystatechange', function() {
      if(document.readyState !== 'loading') {
         init();
      }
   });
}

function init() {
   var linkToInquiry = document.getElementById('link-book-now').getAttribute('href');
   var linkBookNow = linkToInquiry + '&' + document.getElementById('unit_type').options[document.getElementById('unit_type').selectedIndex].getAttribute('data-id');

   document.getElementById('link-book-now').setAttribute('href', linkBookNow);

   var unitData = {
      unitType: document.getElementById('unit_type').options[document.getElementById('unit_type').selectedIndex].getAttribute('data-unit-name'),
      unitPrice: document.getElementById('unit_type').options[document.getElementById('unit_type').selectedIndex].getAttribute('data-unit-price'),
      downPayment: document.getElementById('down_payment').options[document.getElementById('down_payment').selectedIndex].getAttribute('value'),
      loanPeriod: document.getElementById('loan_period').options[document.getElementById('loan_period').selectedIndex].getAttribute('value'),
      fixedInterest: document.getElementById('fixed_interest').options[document.getElementById('fixed_interest').selectedIndex].getAttribute('value'),
      fixedPeriod: document.getElementById('fixed_period').options[document.getElementById('fixed_period').selectedIndex].getAttribute('value'),
      floatInterest: document.getElementById('float_interest').value
   };

   getKPRDetailData(unitData);

   document.getElementById('unit_type').addEventListener('change', (event) => {
      linkBookNow = linkToInquiry + '&' + document.getElementById('unit_type').options[document.getElementById('unit_type').selectedIndex].getAttribute('data-id');
      document.getElementById('link-book-now').setAttribute('href', linkBookNow);

      unitData = {
         unitType: document.getElementById('unit_type').options[document.getElementById('unit_type').selectedIndex].getAttribute('data-unit-name'),
         unitPrice: document.getElementById('unit_type').options[document.getElementById('unit_type').selectedIndex].getAttribute('data-unit-price'),
         downPayment: document.getElementById('down_payment').options[document.getElementById('down_payment').selectedIndex].getAttribute('value'),
         loanPeriod: document.getElementById('loan_period').options[document.getElementById('loan_period').selectedIndex].getAttribute('value'),
         fixedInterest: document.getElementById('fixed_interest').options[document.getElementById('fixed_interest').selectedIndex].getAttribute('value'),
         fixedPeriod: document.getElementById('fixed_period').options[document.getElementById('fixed_period').selectedIndex].getAttribute('value'),
         floatInterest: document.getElementById('float_interest').value
      };

      getKPRDetailData(unitData);
   });

   document.getElementById('down_payment').addEventListener('change', (event) => {
      unitData = {
         unitType: document.getElementById('unit_type').options[document.getElementById('unit_type').selectedIndex].getAttribute('data-unit-name'),
         unitPrice: document.getElementById('unit_type').options[document.getElementById('unit_type').selectedIndex].getAttribute('data-unit-price'),
         downPayment: document.getElementById('down_payment').options[document.getElementById('down_payment').selectedIndex].getAttribute('value'),
         loanPeriod: document.getElementById('loan_period').options[document.getElementById('loan_period').selectedIndex].getAttribute('value'),
         fixedInterest: document.getElementById('fixed_interest').options[document.getElementById('fixed_interest').selectedIndex].getAttribute('value'),
         fixedPeriod: document.getElementById('fixed_period').options[document.getElementById('fixed_period').selectedIndex].getAttribute('value'),
         floatInterest: document.getElementById('float_interest').value
      };

      getKPRDetailData(unitData);
   });

   document.getElementById('loan_period').addEventListener('change', (event) => {
      unitData = {
         unitType: document.getElementById('unit_type').options[document.getElementById('unit_type').selectedIndex].getAttribute('data-unit-name'),
         unitPrice: document.getElementById('unit_type').options[document.getElementById('unit_type').selectedIndex].getAttribute('data-unit-price'),
         downPayment: document.getElementById('down_payment').options[document.getElementById('down_payment').selectedIndex].getAttribute('value'),
         loanPeriod: document.getElementById('loan_period').options[document.getElementById('loan_period').selectedIndex].getAttribute('value'),
         fixedInterest: document.getElementById('fixed_interest').options[document.getElementById('fixed_interest').selectedIndex].getAttribute('value'),
         fixedPeriod: document.getElementById('fixed_period').options[document.getElementById('fixed_period').selectedIndex].getAttribute('value'),
         floatInterest: document.getElementById('float_interest').value
      };

      getKPRDetailData(unitData);
   });

   document.getElementById('fixed_interest').addEventListener('change', (event) => {
      unitData = {
         unitType: document.getElementById('unit_type').options[document.getElementById('unit_type').selectedIndex].getAttribute('data-unit-name'),
         unitPrice: document.getElementById('unit_type').options[document.getElementById('unit_type').selectedIndex].getAttribute('data-unit-price'),
         downPayment: document.getElementById('down_payment').options[document.getElementById('down_payment').selectedIndex].getAttribute('value'),
         loanPeriod: document.getElementById('loan_period').options[document.getElementById('loan_period').selectedIndex].getAttribute('value'),
         fixedInterest: document.getElementById('fixed_interest').options[document.getElementById('fixed_interest').selectedIndex].getAttribute('value'),
         fixedPeriod: document.getElementById('fixed_period').options[document.getElementById('fixed_period').selectedIndex].getAttribute('value'),
         floatInterest: document.getElementById('float_interest').value
      };

      getKPRDetailData(unitData);
   });

   document.getElementById('fixed_period').addEventListener('change', (event) => {
      unitData = {
         unitType: document.getElementById('unit_type').options[document.getElementById('unit_type').selectedIndex].getAttribute('data-unit-name'),
         unitPrice: document.getElementById('unit_type').options[document.getElementById('unit_type').selectedIndex].getAttribute('data-unit-price'),
         downPayment: document.getElementById('down_payment').options[document.getElementById('down_payment').selectedIndex].getAttribute('value'),
         loanPeriod: document.getElementById('loan_period').options[document.getElementById('loan_period').selectedIndex].getAttribute('value'),
         fixedInterest: document.getElementById('fixed_interest').options[document.getElementById('fixed_interest').selectedIndex].getAttribute('value'),
         fixedPeriod: document.getElementById('fixed_period').options[document.getElementById('fixed_period').selectedIndex].getAttribute('value'),
         floatInterest: document.getElementById('float_interest').value
      };

      getKPRDetailData(unitData);
   });

   document.getElementById('float_interest').addEventListener('change', (event) => {
      unitData = {
         unitType: document.getElementById('unit_type').options[document.getElementById('unit_type').selectedIndex].getAttribute('data-unit-name'),
         unitPrice: document.getElementById('unit_type').options[document.getElementById('unit_type').selectedIndex].getAttribute('data-unit-price'),
         downPayment: document.getElementById('down_payment').options[document.getElementById('down_payment').selectedIndex].getAttribute('value'),
         loanPeriod: document.getElementById('loan_period').options[document.getElementById('loan_period').selectedIndex].getAttribute('value'),
         fixedInterest: document.getElementById('fixed_interest').options[document.getElementById('fixed_interest').selectedIndex].getAttribute('value'),
         fixedPeriod: document.getElementById('fixed_period').options[document.getElementById('fixed_period').selectedIndex].getAttribute('value'),
         floatInterest: document.getElementById('float_interest').value
      };

      getKPRDetailData(unitData);
   });
}

function getKPRDetailData(unitData) {
   var result = calculate(unitData);
   
   document.getElementById('unit_price').setAttribute('data-inc-value', result.harga_properti);
   document.getElementById('unit_price').setAttribute('data-inc-duration', 500);
   animateNumber({elem: document.getElementById('unit_price'), currency: 'Rp '});

   document.getElementById('down_payment_result').setAttribute('data-inc-value', result.dp);
   document.getElementById('down_payment_result').setAttribute('data-inc-duration', 500);
   animateNumber({elem: document.getElementById('down_payment_result'), currency: 'Rp '});

   document.getElementById('loan_amount').setAttribute('data-inc-value', result.pokok_pinjaman);
   document.getElementById('loan_amount').setAttribute('data-inc-duration', 500);
   animateNumber({elem: document.getElementById('loan_amount'), currency: 'Rp '});

   document.getElementById('monthly_fixed_installment').setAttribute('data-inc-value', result.angsuran_perbulan_fixed);
   document.getElementById('monthly_fixed_installment').setAttribute('data-inc-duration', 500);
   animateNumber({elem: document.getElementById('monthly_fixed_installment'), currency: 'Rp '});

   document.getElementById('monthly_floating_installment').setAttribute('data-inc-value', result.angsuran_perbulan_floated);
   document.getElementById('monthly_floating_installment').setAttribute('data-inc-duration', 500);
   animateNumber({elem: document.getElementById('monthly_floating_installment'), currency: 'Rp '});

   document.getElementById('year_fixed_period').setAttribute('data-inc-value', result.fixed_period);
   document.getElementById('year_fixed_period').setAttribute('data-inc-duration', 500);
   animateNumber({elem: document.getElementById('year_fixed_period')});
}

function calculate(unitData) {
   var harga_properti = parseInt(unitData.unitPrice);
   var dp = parseInt((unitData.downPayment / 100) * harga_properti);
   var harga_pokok_pinjaman = parseInt(harga_properti - dp);
   var tenor = parseInt(unitData.loanPeriod);
   var bunga_fixed = parseFloat(unitData.fixedInterest.replace(',', '.'));
   var period_bunga_fixed = parseInt(unitData.fixedPeriod);
   var bunga_float = parseFloat(unitData.floatInterest.replace(',', '.'));
   var angs_bunga = 0;
   var angs_pokok = 0;
   var total_angs = 0;
   var sisa_pinjaman = harga_pokok_pinjaman;
   var total_bunga = 0;
   var angsuran_floated = '';
   var periodOnMonth = '';
   var interestMonth = '';
   var divider = '';
   var sisa_pinjaman_fixrate = '';
   var sisa_pinjaman_bunga_float = '';
   var angsuran_fixed = '';
   var installment = [];

   for(var i = 0; i <= (tenor * 12); i++) {
      if(i == 0) {
         installment.push({bulan:i, angsuran_bunga:angs_bunga, angsuran_pokok:angs_pokok, total_angsuran:total_angs, sisa_pinjaman:sisa_pinjaman});
      } else {
         if(i <= (period_bunga_fixed * 12)) {
            periodOnMonth = tenor * 12;
            interestMonth = (bunga_fixed / 12) / 100;
            divider = 1 - (1 / Math.pow(1 + interestMonth, periodOnMonth));
            
            total_angs = Math.round(harga_pokok_pinjaman / (divider / interestMonth));
            angs_bunga = Math.round(bunga_fixed / 12 / 100 * sisa_pinjaman);
            angs_pokok = total_angs - angs_bunga;
            sisa_pinjaman = Math.round(sisa_pinjaman - angs_pokok);
            sisa_pinjaman_fixrate = Math.round(sisa_pinjaman);
            sisa_pinjaman_bunga_float = Math.round(sisa_pinjaman);

            installment.push({bulan:i, angsuran_bunga:angs_bunga, angsuran_pokok:angs_pokok, total_angsuran:total_angs, sisa_pinjaman:sisa_pinjaman});

            angsuran_fixed = total_angs;
         } else if(i > (period_bunga_fixed * 12)) {
            periodOnMonth = (tenor - period_bunga_fixed) * 12;
            interestMonth = (bunga_float / 12) / 100;
            divider = 1 - (1 / Math.pow(1 + interestMonth, periodOnMonth));
            angs_bunga = Math.round(bunga_float / 12 / 100 * sisa_pinjaman_bunga_float);
            total_angs = Math.round(sisa_pinjaman_fixrate / (divider / interestMonth));
            angs_pokok = total_angs - angs_bunga;
            sisa_pinjaman_bunga_float = Math.round(sisa_pinjaman_bunga_float - angs_pokok);

            installment.push({bulan:i, angsuran_bunga:angs_bunga, angsuran_pokok:angs_pokok, total_angsuran:total_angs, sisa_pinjaman:sisa_pinjaman});

            angsuran_floated = total_angs;
         }
      }

      total_bunga = total_bunga + angs_bunga;
   }

   var propertyData = {
      harga_properti:harga_properti,
      dp:dp,
      pokok_pinjaman:harga_pokok_pinjaman,
      angsuran_perbulan_fixed:angsuran_fixed,
      angsuran_perbulan_floated:angsuran_floated,
      total_bunga:total_bunga,
      installment:installment,
      fixed_period:period_bunga_fixed,
      after_fixed_period:period_bunga_fixed
   };

   return propertyData;
}

function animateNumber(obj) {
   var elem = obj.elem;
   var input = (elem.nodeName.toLowerCase() === 'input') ? true: false;
   var value = parseFloat(elem.getAttribute('data-inc-value')) || 0;
   var duration = parseInt(elem.getAttribute('data-inc-duration')) || 0;
   var delay = parseInt(elem.getAttribute('data-inc-delay')) || 0;
   var decimal = ((obj.decimal > 2) ? 2 : obj.decimal) || 0;
   var currency = obj.currency || '';
   var speed = ((obj.speed < 30) ? 30 : obj.speed) || 30;
   var count = 0;
   var increment = value / (duration / speed);
   var interval = null;
   var regex = /\B(?=(\d{3})+(?!\d))/g;
   var run = function() {
      count += increment;
      if(count < value) {
         (input) ? elem.value = currency + (count).toFixed(decimal).toString().replace(regex, '.') : elem.innerHTML = currency + (count).toFixed(decimal).toString().replace(regex, '.');
      } else {
         clearInterval(interval);
         (input) ? elem.value = currency + (value).toFixed(decimal).toString().replace(regex, '.') : elem.innerHTML = currency + (value).toFixed(decimal).toString().replace(regex, '.');
      }
   };
   setTimeout(function() {
      interval = setInterval(run.bind(this), speed);
   }.bind(this), delay);
   this.reset = function() {
      clearInterval(interval);
      value = parseFloat(elem.getAttribute('data-inc-value')) || 0;
      duration = parseInt(elem.getAttribute('data-inc-duration')) || 0;
      increment = value / (duration / speed);
      delay = parseInt(elem.getAttribute('data-inc-delay')) || 0;
      count = 0;
      interval = setInterval(run, speed);
  }.bind(this);
}
