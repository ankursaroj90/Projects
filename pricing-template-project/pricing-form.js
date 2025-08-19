// Global counter for unique IDs
let globalCounter = 0;

// Initialize the form when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeForm();
});

function initializeForm() {
    // Add initial card categories
    addCardCategory('mastercard');
    addCardCategory('visa');
    addCardCategory('rupay');
    
    // Add initial debit card categories
    addDebitCardCategory('mastercard');
    addDebitCardCategory('visa');
    addDebitCardCategory('rupay');
    
    // Add initial international card categories
    addIntlCreditCardCategory('mastercard');
    addIntlCreditCardCategory('visa');
    addIntlDebitCardCategory('mastercard');
    addIntlDebitCardCategory('visa');
    
    // Add initial UPI pricing tier
    addUPIPricingTier('upi-default-pricing');
    
    // Add initial UPI configurations
    addUPICollectConfig();
    addUPIIntentConfig();
    addUPIQRConfig();
}

function addCardCategory(brand) {
    const container = document.getElementById(`${brand}-categories`);
    const categoryId = `${brand}-category-${++globalCounter}`;
    
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'nested-section';
    categoryDiv.id = categoryId;
    
    categoryDiv.innerHTML = `
        <div class="pricing-tier-title">
            <select name="${categoryId}-type" onchange="updateCategoryType('${categoryId}', this.value)">
                <option value="default">Default</option>
                <option value="retail">Retail</option>
                <option value="corporate">Corporate</option>
            </select>
            <button type="button" class="btn btn-remove" onclick="removeElement('${categoryId}')">Remove</button>
        </div>
        <div id="${categoryId}-content">
            <div class="form-group">
                <label>Fixed Fee</label>
                <input type="text" name="${categoryId}-fixed" placeholder="e.g., 5.0">
            </div>
            <div id="${categoryId}-pricing"></div>
            <button type="button" class="btn btn-add" onclick="addPricingTier('${categoryId}-pricing', '${categoryId}')">Add Pricing Tier</button>
        </div>
    `;
    
    container.appendChild(categoryDiv);
    addPricingTier(`${categoryId}-pricing`, categoryId);
}

function addDebitCardCategory(brand) {
    const container = document.getElementById(`debit-${brand}-categories`);
    const categoryId = `debit-${brand}-category-${++globalCounter}`;
    
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'nested-section';
    categoryDiv.id = categoryId;
    
    categoryDiv.innerHTML = `
        <div class="pricing-tier-title">
            <select name="${categoryId}-type" onchange="updateCategoryType('${categoryId}', this.value)">
                <option value="default">Default</option>
                <option value="retail">Retail</option>
                <option value="corporate">Corporate</option>
            </select>
            <button type="button" class="btn btn-remove" onclick="removeElement('${categoryId}')">Remove</button>
        </div>
        <div id="${categoryId}-content">
            <div class="form-group">
                <label>Fixed Fee</label>
                <input type="text" name="${categoryId}-fixed" placeholder="e.g., 5.0">
            </div>
            <div id="${categoryId}-pricing"></div>
            <button type="button" class="btn btn-add" onclick="addPricingTier('${categoryId}-pricing', '${categoryId}')">Add Pricing Tier</button>
        </div>
    `;
    
    container.appendChild(categoryDiv);
    addPricingTier(`${categoryId}-pricing`, categoryId);
}

function addIntlCreditCardCategory(brand) {
    const container = document.getElementById(`intl-credit-${brand}-categories`);
    const categoryId = `intl-credit-${brand}-category-${++globalCounter}`;
    
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'nested-section';
    categoryDiv.id = categoryId;
    
    categoryDiv.innerHTML = `
        <div class="pricing-tier-title">
            <select name="${categoryId}-type" onchange="updateCategoryType('${categoryId}', this.value)">
                <option value="default">Default</option>
                <option value="retail">Retail</option>
                <option value="corporate">Corporate</option>
            </select>
            <button type="button" class="btn btn-remove" onclick="removeElement('${categoryId}')">Remove</button>
        </div>
        <div id="${categoryId}-content">
            <div class="form-group">
                <label>Fixed Fee</label>
                <input type="text" name="${categoryId}-fixed" placeholder="e.g., 5.0">
            </div>
            <div id="${categoryId}-pricing"></div>
            <button type="button" class="btn btn-add" onclick="addPricingTier('${categoryId}-pricing', '${categoryId}')">Add Pricing Tier</button>
        </div>
    `;
    
    container.appendChild(categoryDiv);
    addPricingTier(`${categoryId}-pricing`, categoryId);
}

function addIntlDebitCardCategory(brand) {
    const container = document.getElementById(`intl-debit-${brand}-categories`);
    const categoryId = `intl-debit-${brand}-category-${++globalCounter}`;
    
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'nested-section';
    categoryDiv.id = categoryId;
    
    categoryDiv.innerHTML = `
        <div class="pricing-tier-title">
            <select name="${categoryId}-type" onchange="updateCategoryType('${categoryId}', this.value)">
                <option value="default">Default</option>
                <option value="retail">Retail</option>
                <option value="corporate">Corporate</option>
            </select>
            <button type="button" class="btn btn-remove" onclick="removeElement('${categoryId}')">Remove</button>
        </div>
        <div id="${categoryId}-content">
            <div class="form-group">
                <label>Fixed Fee</label>
                <input type="text" name="${categoryId}-fixed" placeholder="e.g., 5.0">
            </div>
            <div id="${categoryId}-pricing"></div>
            <button type="button" class="btn btn-add" onclick="addPricingTier('${categoryId}-pricing', '${categoryId}')">Add Pricing Tier</button>
        </div>
    `;
    
    container.appendChild(categoryDiv);
    addPricingTier(`${categoryId}-pricing`, categoryId);
}

function updateCategoryType(categoryId, type) {
    const contentDiv = document.getElementById(`${categoryId}-content`);
    
    if (type === 'retail') {
        // Add onus/offus subcategories for retail
        contentDiv.innerHTML = `
            <div class="nested-section">
                <h6 class="nested-title">Default</h6>
                <div class="form-group">
                    <label>Fixed Fee</label>
                    <input type="text" name="${categoryId}-default-fixed" placeholder="e.g., 5.0">
                </div>
                <div id="${categoryId}-default-pricing"></div>
                <button type="button" class="btn btn-add" onclick="addPricingTier('${categoryId}-default-pricing', '${categoryId}-default')">Add Pricing Tier</button>
            </div>
            <div class="nested-section">
                <h6 class="nested-title">Onus</h6>
                <div class="form-group">
                    <label>Fixed Fee</label>
                    <input type="text" name="${categoryId}-onus-fixed" placeholder="e.g., 5.0">
                </div>
                <div id="${categoryId}-onus-pricing"></div>
                <button type="button" class="btn btn-add" onclick="addPricingTier('${categoryId}-onus-pricing', '${categoryId}-onus')">Add Pricing Tier</button>
            </div>
            <div class="nested-section">
                <h6 class="nested-title">Offus</h6>
                <div class="form-group">
                    <label>Fixed Fee</label>
                    <input type="text" name="${categoryId}-offus-fixed" placeholder="e.g., 5.0">
                </div>
                <div id="${categoryId}-offus-pricing"></div>
                <button type="button" class="btn btn-add" onclick="addPricingTier('${categoryId}-offus-pricing', '${categoryId}-offus')">Add Pricing Tier</button>
            </div>
        `;
        
        // Add initial pricing tiers
        addPricingTier(`${categoryId}-default-pricing`, `${categoryId}-default`);
        addPricingTier(`${categoryId}-onus-pricing`, `${categoryId}-onus`);
        addPricingTier(`${categoryId}-offus-pricing`, `${categoryId}-offus`);
        
    } else if (type === 'corporate') {
        // Add default/onus/offus subcategories for corporate
        contentDiv.innerHTML = `
            <div class="nested-section">
                <h6 class="nested-title">Default</h6>
                <div id="${categoryId}-default-pricing"></div>
                <button type="button" class="btn btn-add" onclick="addPricingTier('${categoryId}-default-pricing', '${categoryId}-default')">Add Pricing Tier</button>
            </div>
            <div class="nested-section">
                <h6 class="nested-title">Onus</h6>
                <div class="form-group">
                    <label>Fixed Fee</label>
                    <input type="text" name="${categoryId}-onus-fixed" placeholder="e.g., 5.0">
                </div>
                <div id="${categoryId}-onus-pricing"></div>
                <button type="button" class="btn btn-add" onclick="addPricingTier('${categoryId}-onus-pricing', '${categoryId}-onus')">Add Pricing Tier</button>
            </div>
            <div class="nested-section">
                <h6 class="nested-title">Offus</h6>
                <div class="form-group">
                    <label>Fixed Fee</label>
                    <input type="text" name="${categoryId}-offus-fixed" placeholder="e.g., 5.0">
                </div>
                <div id="${categoryId}-offus-pricing"></div>
                <button type="button" class="btn btn-add" onclick="addPricingTier('${categoryId}-offus-pricing', '${categoryId}-offus')">Add Pricing Tier</button>
            </div>
        `;
        
        // Add initial pricing tiers
        addPricingTier(`${categoryId}-default-pricing`, `${categoryId}-default`);
        addPricingTier(`${categoryId}-onus-pricing`, `${categoryId}-onus`);
        addPricingTier(`${categoryId}-offus-pricing`, `${categoryId}-offus`);
        
    } else {
        // Default category
        contentDiv.innerHTML = `
            <div class="form-group">
                <label>Fixed Fee</label>
                <input type="text" name="${categoryId}-fixed" placeholder="e.g., 5.0">
            </div>
            <div id="${categoryId}-pricing"></div>
            <button type="button" class="btn btn-add" onclick="addPricingTier('${categoryId}-pricing', '${categoryId}')">Add Pricing Tier</button>
        `;
        
        addPricingTier(`${categoryId}-pricing`, categoryId);
    }
}

function addPricingTier(containerId, prefix) {
    const container = document.getElementById(containerId);
    const tierId = `${prefix}-tier-${++globalCounter}`;
    
    const tierDiv = document.createElement('div');
    tierDiv.className = 'pricing-tier';
    tierDiv.id = tierId;
    
    tierDiv.innerHTML = `
        <div class="pricing-tier-title">
            Pricing Tier
            <button type="button" class="btn btn-remove" onclick="removeElement('${tierId}')">Remove</button>
        </div>
        <div class="grid">
            <div class="form-group">
                <label>Min Amount</label>
                <input type="number" name="${tierId}-min" placeholder="e.g., 1" step="0.1">
            </div>
            <div class="form-group">
                <label>Max Amount</label>
                <input type="number" name="${tierId}-max" placeholder="e.g., 1000" step="0.1">
            </div>
            <div class="form-group">
                <label>Type</label>
                <select name="${tierId}-type">
                    <option value="percentage">Percentage</option>
                    <option value="fixed">Fixed</option>
                </select>
            </div>
            <div class="form-group">
                <label>Value Percentage</label>
                <input type="number" name="${tierId}-value-percentage" placeholder="e.g., 1.5" step="0.01">
            </div>
            <div class="form-group">
                <label>Value Fixed</label>
                <input type="number" name="${tierId}-value-fixed" placeholder="e.g., 0" step="0.01">
            </div>
            <div class="form-group">
                <label>Currency</label>
                <select name="${tierId}-currency">
                    <option value="INR">INR</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                </select>
            </div>
        </div>
        <div class="form-group">
            <label>Description</label>
            <textarea name="${tierId}-description" rows="2" placeholder="e.g., Domestic credit card processing fee for Mastercard"></textarea>
        </div>
    `;
    
    container.appendChild(tierDiv);
}

function addUPIPricingTier(containerId) {
    const container = document.getElementById(containerId);
    const tierId = `upi-tier-${++globalCounter}`;
    
    const tierDiv = document.createElement('div');
    tierDiv.className = 'pricing-tier';
    tierDiv.id = tierId;
    
    tierDiv.innerHTML = `
        <div class="pricing-tier-title">
            UPI Pricing Tier
            <button type="button" class="btn btn-remove" onclick="removeElement('${tierId}')">Remove</button>
        </div>
        <div class="grid">
            <div class="form-group">
                <label>Min Amount</label>
                <input type="number" name="${tierId}-min" placeholder="e.g., 1" step="0.1">
            </div>
            <div class="form-group">
                <label>Max Amount</label>
                <input type="number" name="${tierId}-max" placeholder="e.g., 1000" step="0.1">
            </div>
            <div class="form-group">
                <label>Type</label>
                <select name="${tierId}-type">
                    <option value="percentage">Percentage</option>
                    <option value="fixed">Fixed</option>
                </select>
            </div>
            <div class="form-group">
                <label>Value Percentage</label>
                <input type="number" name="${tierId}-value-percentage" placeholder="e.g., 1.5" step="0.01">
            </div>
            <div class="form-group">
                <label>Value Fixed</label>
                <input type="number" name="${tierId}-value-fixed" placeholder="e.g., 0" step="0.01">
            </div>
            <div class="form-group">
                <label>Currency</label>
                <select name="${tierId}-currency">
                    <option value="INR">INR</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                </select>
            </div>
        </div>
        <div class="form-group">
            <label>Description</label>
            <textarea name="${tierId}-description" rows="2" placeholder="e.g., UPI transaction processing fee"></textarea>
        </div>
    `;
    
    container.appendChild(tierDiv);
}

function addUPICollectConfig() {
    const container = document.getElementById('upi-collect-config');
    const configId = `upi-collect-${++globalCounter}`;
    
    const configDiv = document.createElement('div');
    configDiv.className = 'nested-section';
    configDiv.id = configId;
    
    configDiv.innerHTML = `
        <div class="pricing-tier-title">
            <select name="${configId}-type">
                <option value="tpv">TPV</option>
                <option value="nontpv">Non-TPV</option>
            </select>
            <button type="button" class="btn btn-remove" onclick="removeElement('${configId}')">Remove</button>
        </div>
        <div class="grid">
            <div class="form-group">
                <label>Account</label>
                <input type="text" name="${configId}-account" placeholder="e.g., 0.0">
            </div>
            <div class="form-group">
                <label>Credit Line</label>
                <input type="text" name="${configId}-creditline" placeholder="e.g., 0.0">
            </div>
            <div class="form-group">
                <label>UPI Lite</label>
                <input type="text" name="${configId}-upilite" placeholder="e.g., 0.0">
            </div>
        </div>
        <div class="nested-section">
            <h6 class="nested-title">Cards Configuration</h6>
            <div id="${configId}-cards"></div>
            <button type="button" class="btn btn-add" onclick="addUPICardConfig('${configId}-cards')">Add Card Config</button>
        </div>
    `;
    
    container.appendChild(configDiv);
    addUPICardConfig(`${configId}-cards`);
}

function addUPIIntentConfig() {
    const container = document.getElementById('upi-intent-config');
    const configId = `upi-intent-${++globalCounter}`;
    
    const configDiv = document.createElement('div');
    configDiv.className = 'nested-section';
    configDiv.id = configId;
    
    configDiv.innerHTML = `
        <div class="pricing-tier-title">
            <select name="${configId}-type">
                <option value="tpv">TPV</option>
                <option value="nontpv">Non-TPV</option>
            </select>
            <button type="button" class="btn btn-remove" onclick="removeElement('${configId}')">Remove</button>
        </div>
        <div class="grid">
            <div class="form-group">
                <label>Account</label>
                <input type="text" name="${configId}-account" placeholder="e.g., 0.0">
            </div>
            <div class="form-group">
                <label>Credit Line</label>
                <input type="text" name="${configId}-creditline" placeholder="e.g., 0.0">
            </div>
            <div class="form-group">
                <label>UPI Lite</label>
                <input type="text" name="${configId}-upilite" placeholder="e.g., 0.0">
            </div>
        </div>
        <div class="nested-section">
            <h6 class="nested-title">Cards Configuration</h6>
            <div id="${configId}-cards"></div>
            <button type="button" class="btn btn-add" onclick="addUPICardConfig('${configId}-cards')">Add Card Config</button>
        </div>
    `;
    
    container.appendChild(configDiv);
    addUPICardConfig(`${configId}-cards`);
}

function addUPIQRConfig() {
    const container = document.getElementById('upi-qr-config');
    const configId = `upi-qr-${++globalCounter}`;
    
    const configDiv = document.createElement('div');
    configDiv.className = 'nested-section';
    configDiv.id = configId;
    
    configDiv.innerHTML = `
        <div class="pricing-tier-title">
            <select name="${configId}-type">
                <option value="tpv">TPV</option>
                <option value="nontpv">Non-TPV</option>
            </select>
            <button type="button" class="btn btn-remove" onclick="removeElement('${configId}')">Remove</button>
        </div>
        <div class="grid">
            <div class="form-group">
                <label>Account</label>
                <input type="text" name="${configId}-account" placeholder="e.g., 0.0">
            </div>
            <div class="form-group">
                <label>Credit Line</label>
                <input type="text" name="${configId}-creditline" placeholder="e.g., 0.0">
            </div>
            <div class="form-group">
                <label>UPI Lite</label>
                <input type="text" name="${configId}-upilite" placeholder="e.g., 0.0">
            </div>
        </div>
        <div class="nested-section">
            <h6 class="nested-title">Cards Configuration</h6>
            <div id="${configId}-cards"></div>
            <button type="button" class="btn btn-add" onclick="addUPICardConfig('${configId}-cards')">Add Card Config</button>
        </div>
    `;
    
    container.appendChild(configDiv);
    addUPICardConfig(`${configId}-cards`);
}

function addUPICardConfig(containerId) {
    const container = document.getElementById(containerId);
    const cardId = `upi-card-${++globalCounter}`;
    
    const cardDiv = document.createElement('div');
    cardDiv.className = 'pricing-tier';
    cardDiv.id = cardId;
    
    cardDiv.innerHTML = `
        <div class="pricing-tier-title">
            UPI Card Configuration
            <button type="button" class="btn btn-remove" onclick="removeElement('${cardId}')">Remove</button>
        </div>
        <div class="nested-section">
            <h6 class="nested-title">Domestic</h6>
            <div class="nested-section">
                <h6 class="nested-title">Credit</h6>
                <div class="form-group">
                    <label>RuPay Values (comma-separated)</label>
                    <input type="text" name="${cardId}-domestic-credit-rupay" placeholder="e.g., 0.0, 1.0, 2.0">
                </div>
            </div>
            <div class="nested-section">
                <h6 class="nested-title">Debit</h6>
                <div class="form-group">
                    <label>RuPay Values (comma-separated)</label>
                    <input type="text" name="${cardId}-domestic-debit-rupay" placeholder="e.g., 0.0, 1.0, 2.0">
                </div>
            </div>
        </div>
    `;
    
    container.appendChild(cardDiv);
}

function removeElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.remove();
    }
}

function generateJSON() {
    const formData = new FormData(document.getElementById('pricingForm'));
    const data = {};
    
    // Initialize the main structure
    data.online = {
        paymentGateway: {
            cards: {
                domestic: {
                    credit: {},
                    debit: {}
                },
                international: {
                    credit: {},
                    debit: {}
                }
            },
            upi: {
                domestic: {
                    default: {},
                    collect: {},
                    intent: {},
                    qr: {}
                }
            }
        }
    };
    
    // Process form data
    for (let [key, value] of formData.entries()) {
        processFormField(data, key, value);
    }
    
    // Clean up and structure the data
    const structuredData = structureData(data);
    
    // Display the JSON
    const jsonOutput = document.getElementById('jsonOutput');
    jsonOutput.textContent = JSON.stringify(structuredData, null, 2);
}

function processFormField(data, key, value) {
    if (!value || value.trim() === '') return;
    
    // Parse the key to understand the structure
    const parts = key.split('-');
    
    // Handle different types of fields
    if (key.includes('mastercard') || key.includes('visa') || key.includes('rupay')) {
        processCardField(data, key, value, parts);
    } else if (key.includes('upi')) {
        processUPIField(data, key, value, parts);
    }
}

function processCardField(data, key, value, parts) {
    // Determine card type and location
    let cardType = 'domestic';
    let cardCategory = 'credit';
    let brand = '';
    
    if (key.includes('intl')) {
        cardType = 'international';
    }
    
    if (key.includes('debit')) {
        cardCategory = 'debit';
    }
    
    if (key.includes('mastercard')) {
        brand = 'mastercard';
    } else if (key.includes('visa')) {
        brand = 'visa';
    } else if (key.includes('rupay')) {
        brand = 'rupay';
    }
    
    // Initialize brand structure if not exists
    if (!data.online.paymentGateway.cards[cardType][cardCategory][brand]) {
        data.online.paymentGateway.cards[cardType][cardCategory][brand] = {};
    }
    
    // Process the specific field
    const brandData = data.online.paymentGateway.cards[cardType][cardCategory][brand];
    
    if (key.includes('-type') && !key.includes('-tier-')) {
        // This is a category type selector
        return; // We'll handle this in the structure phase
    } else if (key.includes('-fixed') && !key.includes('-tier-')) {
        // This is a fixed fee
        const categoryPath = extractCategoryPath(key);
        setNestedValue(brandData, categoryPath + '.fixed', value);
    } else if (key.includes('-tier-')) {
        // This is a pricing tier field
        processPricingTierField(brandData, key, value);
    }
}

function processUPIField(data, key, value, parts) {
    const upiData = data.online.paymentGateway.upi.domestic;
    
    if (key.includes('upi-default')) {
        if (key.includes('-fixed')) {
            upiData.default.fixed = value;
        } else if (key.includes('-tier-')) {
            if (!upiData.default.pricing) {
                upiData.default.pricing = [];
            }
            processUPIPricingTier(upiData.default.pricing, key, value);
        }
    } else if (key.includes('upi-collect') || key.includes('upi-intent') || key.includes('upi-qr')) {
        const method = key.includes('collect') ? 'collect' : key.includes('intent') ? 'intent' : 'qr';
        processUPIMethodField(upiData[method], key, value);
    }
}

function processPricingTierField(brandData, key, value) {
    // Extract tier ID and field name
    const tierMatch = key.match(/-tier-(\d+)-(.+)/);
    if (!tierMatch) return;
    
    const tierId = tierMatch[1];
    const fieldName = tierMatch[2];
    
    // Find the appropriate pricing array
    const categoryPath = extractCategoryPath(key.replace(`-tier-${tierId}-${fieldName}`, ''));
    const pricingPath = categoryPath ? categoryPath + '.pricing' : 'pricing';
    
    let pricingArray = getNestedValue(brandData, pricingPath);
    if (!pricingArray) {
        pricingArray = [];
        setNestedValue(brandData, pricingPath, pricingArray);
    }
    
    // Find or create the tier object
    let tier = pricingArray.find(t => t._tierId === tierId);
    if (!tier) {
        tier = { _tierId: tierId };
        pricingArray.push(tier);
    }
    
    // Set the field value
    if (fieldName === 'min' || fieldName === 'max') {
        tier[fieldName] = parseFloat(value);
    } else if (fieldName === 'value-percentage' || fieldName === 'value-fixed') {
        tier[fieldName.replace('-', '_')] = parseFloat(value);
    } else {
        tier[fieldName] = value;
    }
}

function processUPIPricingTier(pricingArray, key, value) {
    const tierMatch = key.match(/-tier-(\d+)-(.+)/);
    if (!tierMatch) return;
    
    const tierId = tierMatch[1];
    const fieldName = tierMatch[2];
    
    let tier = pricingArray.find(t => t._tierId === tierId);
    if (!tier) {
        tier = { _tierId: tierId };
        pricingArray.push(tier);
    }
    
    if (fieldName === 'min' || fieldName === 'max') {
        tier[fieldName] = parseFloat(value);
    } else if (fieldName === 'value-percentage' || fieldName === 'value-fixed') {
        tier[fieldName.replace('-', '_')] = parseFloat(value);
    } else {
        tier[fieldName] = value;
    }
}

function processUPIMethodField(methodData, key, value) {
    // Initialize method data structure
    if (!methodData.tpv) methodData.tpv = {};
    if (!methodData.nontpv) methodData.nontpv = {};
    
    const configMatch = key.match(/upi-\w+-(\d+)-(.+)/);
    if (!configMatch) return;
    
    const configId = configMatch[1];
    const fieldName = configMatch[2];
    
    // Determine if this is TPV or Non-TPV based on form selection
    // For now, we'll create both structures
    const configType = 'tpv'; // This should be determined from form data
    
    if (fieldName === 'account' || fieldName === 'creditline' || fieldName === 'upilite') {
        methodData[configType][fieldName] = value;
    } else if (fieldName.includes('cards')) {
        if (!methodData[configType].cards) {
            methodData[configType].cards = [{ domestic: { credit: [{ rupay: [] }], debit: [{ rupay: [] }] } }];
        }
        // Process card configuration
        processUPICardField(methodData[configType].cards[0], key, value);
    }
}

function processUPICardField(cardData, key, value) {
    if (key.includes('domestic-credit-rupay')) {
        cardData.domestic.credit[0].rupay = value.split(',').map(v => v.trim());
    } else if (key.includes('domestic-debit-rupay')) {
        cardData.domestic.debit[0].rupay = value.split(',').map(v => v.trim());
    }
}

function extractCategoryPath(key) {
    if (key.includes('-default-')) {
        return 'default';
    } else if (key.includes('-retail-')) {
        if (key.includes('-onus-')) {
            return 'retail.onus';
        } else if (key.includes('-offus-')) {
            return 'retail.offus';
        } else {
            return 'retail.default';
        }
    } else if (key.includes('-corporate-')) {
        if (key.includes('-onus-')) {
            return 'corporate.onus';
        } else if (key.includes('-offus-')) {
            return 'corporate.offus';
        } else {
            return 'corporate.default';
        }
    }
    return '';
}

function getNestedValue(obj, path) {
    return path.split('.').reduce((current, key) => current && current[key], obj);
}

function setNestedValue(obj, path, value) {
    const keys = path.split('.');
    const lastKey = keys.pop();
    const target = keys.reduce((current, key) => {
        if (!current[key]) current[key] = {};
        return current[key];
    }, obj);
    target[lastKey] = value;
}

function structureData(data) {
    // Clean up temporary fields and structure the data properly
    const cleanData = JSON.parse(JSON.stringify(data));
    
    // Remove _tierId fields from pricing tiers
    function cleanPricingTiers(obj) {
        if (Array.isArray(obj)) {
            obj.forEach(item => {
                if (item._tierId) delete item._tierId;
                cleanPricingTiers(item);
            });
        } else if (typeof obj === 'object' && obj !== null) {
            Object.values(obj).forEach(cleanPricingTiers);
        }
    }
    
    cleanPricingTiers(cleanData);
    return cleanData;
}

function clearForm() {
    document.getElementById('pricingForm').reset();
    document.getElementById('jsonOutput').textContent = 'Click "Generate JSON" to see the output here...';
}

function loadSampleData() {
    // Load some sample data for demonstration
    const sampleData = {
        "online": {
            "paymentGateway": {
                "cards": {
                    "domestic": {
                        "credit": {
                            "mastercard": {
                                "default": {
                                    "fixed": "5.0",
                                    "pricing": [
                                        {
                                            "min": 1,
                                            "max": 1000,
                                            "type": "percentage",
                                            "value_percentage": 1.5,
                                            "value_fixed": 0,
                                            "currency": "INR",
                                            "description": "Sample Mastercard processing fee"
                                        }
                                    ]
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    
    document.getElementById('jsonOutput').textContent = JSON.stringify(sampleData, null, 2);
}

function copyToClipboard() {
    const jsonOutput = document.getElementById('jsonOutput');
    navigator.clipboard.writeText(jsonOutput.textContent).then(() => {
        alert('JSON copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

function downloadJSON() {
    const jsonOutput = document.getElementById('jsonOutput');
    const dataStr = jsonOutput.textContent;
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'pricing-configuration.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}

