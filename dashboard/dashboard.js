// in dashboard.js
async function renderDashboard() {
    const user = await getSession(); // This function is global now!
    
    if (user) {
        document.getElementById('emailSpan').innerText = user.email;
        
        // Now fetch that user's specific games from Supabase
        const { data: games } = await supabaseOBJ
            .from('games')
            .select('*')
            .eq('owner_id', user.id);
            
        console.log("Your games:", games);
    }
}

renderDashboard();
