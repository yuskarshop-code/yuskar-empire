// ========================================================
// SUPABASE CLIENT & BACKEND INTEGRATION FILE
// ========================================================
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// Hindura ibi ubyinjizemo Supabase URL na Anon Key zawe ziturutse muri Dashboard yawe
const SUPABASE_URL = 'https://zrlreliabtivzxubthcf.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpybHJlbGlhYnRpdnp4dWJ0aGNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI2Njk0ODYsImV4cCI6MjEwODI0NTQ4Nn0.lIzl-LzjllCBiqi12MZaD_B2p3TQGvDs6q6-bcTOs6A';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/**
 * 1. UBURYO BWO KOHEREZA IFOTO MURI SUPABASE STORAGE
 */
export async function uploadProductImage(file) {
    try {
        if (!file) return '';
        const fileExt = file.name.split('.').pop();
        const fileName = `${Date.now()}_${Math.random().toString(36).substring(2, 9)}.${fileExt}`;
        const filePath = `${fileName}`;

        const { error: uploadError } = await supabase.storage
            .from('product-images')
            .upload(filePath, file);

        if (uploadError) throw uploadError;

        const { data } = supabase.storage
            .from('product-images')
            .getPublicUrl(filePath);

        return data.publicUrl;
    } catch (error) {
        console.error('Ikosa mu kubika ifoto:', error.message);
        throw error;
    }
}

/**
 * 2. UBURYO BWO BIKA NO GUKURURA IBICURUZWA (PRODUCTS)
 */
export async function saveProduct(productData) {
    const { data, error } = await supabase
        .from('products')
        .insert([productData])
        .select();

    if (error) {
        console.error('Ikosa mu kubika gicuruzwa:', error.message);
        throw error;
    }
    return data[0];
}

export async function fetchProducts() {
    const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Ikosa mu gukurura ibicuruzwa:', error.message);
        throw error;
    }
    return data;
}

/**
 * 3. UBURYO BWO BIKA NO GUKURURA ORDERS Z'ABAKIRIYA
 */
export async function saveOrder(orderData) {
    const { data, error } = await supabase
        .from('orders')
        .insert([orderData])
        .select();

    if (error) {
        console.error('Ikosa mu kubika order:', error.message);
        throw error;
    }
    return data[0];
}

export async function fetchOrders() {
    const { data, error } = await supabase
        .from('orders')
        .select('*, customers(*)')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Ikosa mu gukurura orders:', error.message);
        throw error;
    }
    return data;
}

/**
 * 4. UBURYO BWO BIKA NO GUKURURA UBUTUMWA BWA SMS
 */
export async function saveSMSMessage(smsData) {
    const { data, error } = await supabase
        .from('sms_messages')
        .insert([smsData])
        .select();

    if (error) {
        console.error('Ikosa mu kubika SMS:', error.message);
        throw error;
    }
    return data[0];
}

export async function fetchSMSMessages() {
    const { data, error } = await supabase
        .from('sms_messages')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Ikosa mu gukurura SMS:', error.message);
        throw error;
    }
    return data;
}